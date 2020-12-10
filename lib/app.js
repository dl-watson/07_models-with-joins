const express = require("express");
const app = express();

const Poets = require("./models/Poets");

app.use(express.json());

// ---- MODEL ONE ----

// POST poet
app.post("/api/v1/poets/", (req, res, next) => {
  Poets.insert(req.body)
    .then((poet) => res.send(poet))
    .catch(next);
});

// GET poet
app.get("/api/v1/poets/", (req, res, next) => {
  Poets.find()
    .then((poet) => res.send(poet))
    .catch(next);
});

// GET poet BY ID
app.get("/api/v1/poets/:id", (req, res, next) => {
  Poets.findByID(req.params.id)
    .then((poet) => res.send(poet))
    .catch(next);
});

// PUT poet BY ID
app.put("/api/v1/poets/:id", (req, res, next) => {
  Poets.update(req.params.id, req.body)
    .then((poet) => res.send(poet))
    .catch(next);
});

// DELETE poet BY ID
app.delete("/api/v1/poets/:id", (req, res, next) => {
  Poets.delete(req.params.id)
    .then((poet) => res.send(poet))
    .catch(next);
});

// ---- MODEL TWO ----

// POST poem

// GET poem

// GET poem BY ID

// PUT poem BY ID

// DELETE poem BY ID

// app.use(require("./middleware/not-found"));
// app.use(require("./middleware/error"));

module.exports = app;
