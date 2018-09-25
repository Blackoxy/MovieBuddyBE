const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
const queries = require("./queries");
const morgan = require('morgan')

app.use(bodyParser.json());
app.use(cors());

app.listen(port, (request, response) => {
  console.log(`listening on ${port}`);
});

app.get("/", (request, response, next) => {
  //response.send("hellllo");
  queries.getAll().then(result => response.json({ result }));
});

app.get('/*', function(req, res, next) {
  res.json({message:'Invalid URL'})
});

app.use(function(error, req, res, next) {
  // Won't get here, because Express doesn't catch the above error
  res.json({ message: error.message });
});



