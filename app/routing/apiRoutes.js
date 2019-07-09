var express = require('express');
var friends = require('../data/friends');
var router = express.Router();
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.get("/friends", function(req, res) {
    res.send(friends);
});
  

router.post("/friends", function(req, res) {
    friends.push(req.body);
    res.json(true);
});

module.exports = router;