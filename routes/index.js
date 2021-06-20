var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', { title: 'Change My Map', id: null });
});

router.get("/:id", function (req, res) {
  res.render("index", { title: "Change My Map", id: req.params.id })
})

module.exports = router;
