const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
const queries = require("./queries");
const morgan = require("morgan");
const wish = require("./api/wish");
const myWishlist = require("./api/my-wishlist");
const title = require("./api/title");
const quote = require("./api/quote");

app.use(bodyParser.json());
app.use(cors());

app.use("/wish", wish);
app.use("/my-wishlist", myWishlist);
app.use("/title", title);
app.use("/quote", quote);

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  // Won't get here, because Express doesn't catch the above error
  res.json({
    message: err.message,
    error: req.app.get("env") === "development" ? err : {}
  });
});

app.listen(port, (request, response) => {
  console.log(`listening on ${port}`);
});

app.get("/", (request, response) => {
  queries.getAll().then(result => response.json({ result }));
});

app.get("/:id", (request, response) => {
  queries.get(request.params.id).then(result => response.json({ result }));
});

// app.get("/*", function(req, res, next) {
//   res.json({ message: "Invalid URL" });
// });

app.post("/", (request, response) => {
  queries.create(request.body).then(result => response.json({ result }));
});
app.put("/:id", (request, response) => {
  queries
    .update(request.params.id, request.body)
    .then(result => response.json({ result }));
});
app.delete("/:id", (request, response) => {
  queries.delete(request.params.id).then(result => response.json({ result }));
});

// app.get("/wishes", (req, res) => {
//   queries.getAllWishes().then(result => response.json({ result }));
// });
