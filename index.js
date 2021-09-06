const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('<h3>Hello NodeJs on Heroku</h3></br><a href="https://github.com/Whitehawk2015/Dev-Lab-Beta"target="_blank">Visit the Github repro</a>');   

});

app.listen(process.env.PORT || 3000);
