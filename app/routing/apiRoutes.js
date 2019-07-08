var express = require('express')
var router = express.Router()

router.get("/friends", function(req, res) {
    // res.sendFile(path.join(__dirname, "home.html"));
    res.send('api friends');
});
  
router.get("/friendsPost", function(req, res) {
    // res.sendFile(path.join(__dirname, "survey.html"));
    res.send('api post')
});

module.exports = router;