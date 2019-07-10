var express = require('express');
var friends = require('../data/friends');
var router = express.Router();
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.get("/friends", function(req, res) {
    res.send(friends);
});
  

router.post("/friends", function(req, res) {  
    // change scores from strings to numbers  
    req.body.scores = req.body.scores.map(Number);
    
    // find closest matching friend
    var differences = []
    friends.forEach(friend => {
        var totalDifference = 0;
        console.log(friend);
        for(var i=0; i<req.body.scores.length; i++ ){
            totalDifference += Math.abs(req.body.scores[i]-friend.scores[i]);
        };
        differences.push(totalDifference);
    });
    var closestFriend = friends[differences.indexOf(Math.min.apply(null, differences))];
    console.log(closestFriend);

    // push on to friends array and send
    friends.push(req.body);
    res.send(closestFriend);
});

module.exports = router;