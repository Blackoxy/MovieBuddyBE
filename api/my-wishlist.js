const express = require("express");
const router = express.Router();
const queries = require("../queries");

router.get("/:id", (req, res) => {
  queries.getMyWishlist(req.params.id).then(result => res.json({ result }));
});

router.put("/:id", (req, res) => {
  queries
    .updateWishlist(req.params.id, req.body)
    .then(result => res.json({ result }));
});

router.delete("/:id", (req, res) => {
  queries.clearWishlist(req.params.id).then(result => res.json({ result }));
});

module.exports = router;
