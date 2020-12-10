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

  it("adds a new poem", async () => {
    const send = await request(app).post("/api/v1/poets").send({
      poet: "Langston Hughes",
      dateOfBirth: 1902,
      dateOfDeath: 1967,
    });

    const res = await request(app).post("/api/v1/poems").send({
      author: "Langston Hughes",
      title: "Suicide's Note",
      text: "The calm,\nCool face of the river\nAsked me for a kiss.",
    });

    expect(res.body).toEqual({
      author: "Langston Hughes",
      title: "Suicide's Note",
      text: "The calm,\nCool face of the river\nAsked me for a kiss.",
    });
  });

  it("gets all poets", async () => {
    const poets = await Promise.all(
      [
        {
          poet: "Langston Hughes",
          dateOfBirth: 1902,
          dateOfDeath: 1967,
        },
        {
          poet: "Sylvia Plath",
          dateOfBirth: 1932,
          dateOfDeath: 1963,
        },
        {
          poet: "Adrienne Rich",
          dateOfBirth: 1929,
          dateOfDeath: 2012,
        },
      ].map((poet) => Poets.insert(poet))
    );

    const res = await request(app).get("/api/v1/poets");

    expect(res.body).toEqual(expect.arrayContaining(poets));
    expect(res.body.length).toEqual(poets.length);
  });
  it("gets all poems", async () => {});

  it("gets a poet by id", async () => {});
  it("gets a poem by id", async () => {});

  it("updates a poet by id", async () => {});
  it("updates a poem by id", async () => {});

  it("deletes a poet by id", async () => {});
  it("deletes a poem by id", async () => {});
});
