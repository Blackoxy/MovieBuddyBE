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
<<<<<<< HEAD
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



=======
    console.log("Port Works!");
});

app.get("/", (request, response) => {
    //response.send("hellllo");
    queries.getAll().then(result => response.json({ result }));
});

// app.get("/:id", (request, response) => {
//     queries.getBuddyById(request.params.id).then(result => response.json({ result }))
// })

app.post("/", (request, response) => {
    queries.createBuddy(request.body).then(result => response.json({ result }))
})
app.put("/:id", (request, response) => {
    queries.updateBuddy(request.params.id, request.body).then(result => response.json({ result }))
})
app.delete("/:id", (request, response) => {
    queries.deleteBuddy(request.params.id).then(result => response.json({ result }))
})
// app.get("/:id", (request, response) => {
//     queries.getMoviesById(request.params.id).then(result => response.json({ result }))
// })
>>>>>>> b13af01b7edaf8b179bb8bb03b2770092b58f10f
