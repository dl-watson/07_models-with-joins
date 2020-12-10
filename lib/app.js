const express = require("express");
const app = express();

const Poets = require("./models/Poets");
const Poems = require("./models/Poems");

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
app.post("/api/v1/poems/", (req, res, next) => {
  Poems.insert(req.body)
    .then((poem) => res.send(poem))
    .catch(next);
});

// GET poem
app.get("/api/v1/poems/", (req, res, next) => {
  Poems.find()
    .then((poem) => res.send(poem))
    .catch(next);
});

// GET poem BY ID
app.get("/api/v1/poems/:id", (req, res, next) => {
  Poems.findByID(req.params.id)
    .then((poem) => res.send(poem))
    .catch(next);
});

// PUT poem BY ID
app.put("/api/v1/poems/:id", (req, res, next) => {
  Poems.update(req.params.id, req.body)
    .then((poem) => res.send(poem))
    .catch(next);
});

// DELETE poem BY ID
app.delete("/api/v1/poems/:id", (req, res, next) => {
  Poems.delete(req.params.id)
    .then((poem) => res.send(poem))
    .catch(next);
});

module.exports = app;
