const pool = require("../utils/pool");

module.exports = class Poems {
  id;
  author;
  title;
  text;

  constructor(row) {
    this.author = row.author;
    this.title = row.title;
    this.text = row.text;
  }

  // INSERT
  static async insert({ author, title, text }) {
    const { rows } = await pool.query(
      `
      INSERT INTO poems (author, title, text)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `,
      [author, title, text]
    );

    return new Poems(rows[0]);
  }

  // FIND
  static async find() {
    const { rows } = await pool.query(
      `
        SELECT * FROM poems
      `
    );

    return rows.map((row) => new Poems(row));
  }
  // FIND BY ID
  static async findByID(id) {
    const { rows } = await pool.query(
      `
        SELECT * FROM poems
        WHERE id=$1
      `,
      [id]
    );
    if (!rows[0]) throw new Error(`No poem with id ${id}`);
    return new Poems(rows[0]);
  }

  // UPDATE
  static async update(id, { title, text }) {
    const { rows } = await pool.query(
      `
        UPDATE poems
        SET title=$1,
            text=$2
        WHERE id=$3
        RETURNING *
      `,
      [title, text, id]
    );

    return new Poems(rows[0]);
  }

  // DELETE
  static async delete(id) {
    const { rows } = await pool.query(
      `
        DELETE FROM poems 
        WHERE id=$1
        RETURNING *
      `,
      [id]
    );

    return new Poems(rows[0]);
  }
};
