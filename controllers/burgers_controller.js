const brgr = require('../models/burger.js');
const express = require('express');
const router = express.Router();

router.get("/", function(req, res) {
  brgr.all((data) => {
    const hbsObject = {
      burgers: data,
    };
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", (req, res) => {
  brgr.create(["name", "eaten"], [req.body.name, false], function(result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var putIt = `id = ${req.params.id}`;
  brgr.update(
    {
      eaten: req.body.eaten,
    },
    putIt,
    function(result) {
      if (result.changedRows === 0) {
        return res.status(404).end();
      }
      res.status(200).end();
    },
  );
});

module.exports = router;