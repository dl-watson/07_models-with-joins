const fs = require("fs");
const pool = require("../lib/utils/pool");
const request = require("supertest");
const app = require("../lib/app");

describe("07_models-with-joins routes", () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync("./sql/setup.sql", "utf-8"));
  });

  afterAll(() => {
    return pool.end();
  });

  it("adds a new poet", async () => {
    const res = await request(app)
      .post("/api/v1/poets")
      .send({ hello: "world" });

    expect(res.body).toEqual({ hello: "world" });
  });
  it("adds a new poem", async () => {});
});
