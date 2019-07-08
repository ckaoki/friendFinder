var express = require('express');
var path = require('path')
var apiRoutes = require('./app/routing/apiRoutes');
var htmlRoutes = require('./app/routing/htmlRoutes');

var app = express();

var PORT = process.env.PORT || 3000;
app.use('/images', express.static(__dirname +'/app/public/images'));  
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


app.listen(PORT, function(){
    console.log("listening on port: " + PORT);
})