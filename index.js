const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('<h3>Hello NodeJs on David Wiles Heroku</h3></br><a href="https://github.com/04banshee/Dev_Training_Beta_Heroku.git/"target="_blank">Visit the Github repro</a>');    

});

app.listen(process.env.PORT || 3000);