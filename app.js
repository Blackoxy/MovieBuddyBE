const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 4000;
const queries = require("./queries");

app.use(bodyParser.json());
app.use(cors());

app.get("/", (request, response) => {
  queries.getAll().then(result => response.json({ result }));
});

app.get("/user/:id", (request, response) => {
  queries
    .getBuddyById(request.params.id)
    .then(result => response.json({ result }));
});

app.get("/movie/:id", (request, response) => {
  queries
    .getMovieById(request.params.id)
    .then(result => response.json({ result }));
});

app.get("/quote/:id", (request, response) => {
  queries.getQuote(request.params.id).then(result => response.json({ result }));
});

app.post("/user", (request, response) => {
  queries.createBuddy(request.body).then(result => response.json({ result }));
});

app.post("/movie", (request, response) => {
  queries.createMovie(request.body).then(result => response.json({ result }));
});

app.put("/user/:id", (request, response) => {
  queries
    .updateBuddy(request.params.id, request.body)
    .then(result => response.json({ result }));
});

app.put("/movie/:id", (request, response) => {
  queries
    .updateMovie(request.params.id, request.body)
    .then(result => response.json({ result }));
});

app.delete("/user/:lastName", (request, response) => {
  queries
    .deleteBuddy(request.params.lastName)
    .then(result => response.json({ result }));
});

app.delete("/movie/:id", (request, response) => {
  queries
    .deleteMovie(request.params.id)
    .then(result => response.json({ result }));
});

app.listen(port, (request, response) => {
  console.log("Port Works!");
});
