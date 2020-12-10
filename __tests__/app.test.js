const fs = require("fs");
const pool = require("../lib/utils/pool");
const request = require("supertest");
const app = require("../lib/app");

const Poets = require("../lib/models/Poets");
const Poems = require("../lib/models/Poems");

describe("07_models-with-joins routes", () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync("./sql/setup.sql", "utf-8"));
  });

  afterAll(() => {
    return pool.end();
  });

  it("adds a new poet", async () => {
    const res = await request(app).post("/api/v1/poets").send({
      poet: "Sylvia Plath",
      dateOfBirth: 1932,
      dateOfDeath: 1963,
    });

    expect(res.body).toEqual({
      id: "1",
      poet: "Sylvia Plath",
      dateOfBirth: 1932,
      dateOfDeath: 1963,
    });
  });

  it("adds a new poem", async () => {});
});
