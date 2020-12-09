module.exports = class Poets {
  id;
  name;
  DOB;
  DOD;

  constructor(row) {
    this.name = row.name;
    this.DOB = row.date_of_birth;
    this.DOD = row.date_of_death;
  }

  // INSERT

  // FIND

  // FIND BY ID

  // UPDATE

  // DELETE
};
