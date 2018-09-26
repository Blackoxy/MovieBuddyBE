const express = require("express");
const router = express.Router();
const queries = require("../queries");

router.get("/", (req, res) => {
  queries.getAllWishes().then(result => res.json({ result }));
});

router.get("/:id", (req, res) => {
  queries.getWish(req.params.id).then(result => res.json({ result }));
});

module.exports = router;
