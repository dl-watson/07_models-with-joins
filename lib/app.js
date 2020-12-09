const express = require("express");
const app = express();

app.use(express.json());

const Poet = require("./models/Poets");

// ---- MODEL ONE ----

// POST poet
app.post("/api/v1/poets", (req, res, next) => {
  res.send({ hello: "world" }).catch(next);
});

// GET poet

// GET poet BY ID

// PUT poet BY ID

// DELETE poet BY ID

// ---- MODEL TWO ----

// POST poem

// GET poem

// GET poem BY ID

// PUT poem BY ID

// DELETE poem BY ID

app.use(require("./middleware/not-found"));
app.use(require("./middleware/error"));

module.exports = app;
