const pool = require("../utils/pool");

module.exports = class Poets {
  id;
  poet;
  dateOfBirth;
  dateOfDeath;

  constructor(row) {
    this.id = row.id;
    this.poet = row.poet;
    this.dateOfBirth = row.date_of_birth;
    this.dateOfDeath = row.date_of_death;
  }

  // INSERT
  static async insert({ poet, dateOfBirth, dateOfDeath }) {
    const { rows } = await pool.query(
      `
      INSERT INTO poet (poet, date_of_birth, date_of_death)
      VALUES ($1, $2, $3)
      RETURNING *
    `,
      [poet, dateOfBirth, dateOfDeath]
    );

    return new Poets(rows[0]);
  }

  // FIND
  static async find() {
    const { rows } = await pool.query(
      `
        SELECT * FROM poet;
      `
    );

    return rows.map((row) => new Poets(row));
  }

  // FIND BY ID
  static async findByID(id) {
    const { rows } = await pool.query(
      `
      SELECT 
      poet.*, 
      array_to_json(array_agg(poems.*)) AS poems
      FROM 
        poet
      JOIN poems
      ON poet.poet=poems.author
      WHERE poet.id=$1
      GROUP BY poet.id
      `,
      [id]
    );
    if (!rows[0]) throw new Error(`No poet with id ${id}`);
    return {
      ...new Poets(rows[0]),
      poems: rows[0].poems.map((poem) => new Poems(poem)),
    };
  }

  // UPDATE
  static async update(id, { dateOfBirth, dateOfDeath }) {
    const { rows } = await pool.query(
      `
        UPDATE poet
        SET date_of_birth=$1,
            date_of_death=$2
        WHERE id=$3
        RETURNING *
      `,
      [dateOfBirth, dateOfDeath, id]
    );

    return new Poets(rows[0]);
  }

  // DELETE
};
