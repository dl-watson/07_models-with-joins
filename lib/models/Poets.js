const pool = require("../utils/pool");

module.exports = class Poets {
  id;
  poet;
  DOB;
  DOD;

  constructor(row) {
    this.id = row.id;
    this.poet = row.poet;
    this.DOB = row.date_of_birth;
    this.DOD = row.date_of_death;
  }

  // INSERT
  static async insert({ poet, DOB, DOD }) {
    const { rows } = await pool.query(
      `
      INSERT INTO poet (poet, date_of_birth, date_of_death)
      VALUES ($1, $2, $3)
      RETURNING *
    `,
      [poet, DOB, DOD]
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
        SELECT * FROM poet
        WHERE id=$1
      `,
      [id]
    );
    if (!rows[0]) throw new Error(`No poet with id ${id}`);
    return new Poets(rows[0]);
  }

  // UPDATE

  // DELETE
};
