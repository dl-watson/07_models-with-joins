const pool = require("../utils/pool");

module.exports = class Poets {
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
      INSERT INTO poems (author, date_of_birth, date_of_death)
      VALUES ($1, $2, $3)
      RETURNING *
    `,
      [author, title, text]
    );

    return new Poets(rows[0]);
  }

  // FIND

  // FIND BY ID

  // UPDATE

  // DELETE
};
