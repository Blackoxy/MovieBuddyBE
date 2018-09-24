const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(cors())

module.exports = app

app.listen(port, (request, response) => {
    console.log("Port Works!")
})

app.get("/", (request, response) => {
    console.log("hellllo")
})

