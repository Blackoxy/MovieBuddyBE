const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
const queries = require("./queries");

app.use(bodyParser.json());
app.use(cors());

app.listen(port, (request, response) => {
    console.log("Port Works!");
});

app.get("/", (request, response) => {
    //response.send("hellllo");
    queries.getAll().then(result => response.json({ result }));
});

app.get("/:id", (request, response) => {
    queries.getBuddyById(request.params.id).then(result => response.json({ result }))
})

app.post("/", (request, response) => {
    queries.createBuddy(request.body).then(result => response.json({ result }))
})
app.put("/:id", (request, response) => {
    queries.updateBuddy(request.params.id, request.body).then(result => response.json({ result }))
})
app.delete("/:id", (request, response) => {
    queries.deleteBuddy(request.params.id).then(result => response.json({ result }))
})