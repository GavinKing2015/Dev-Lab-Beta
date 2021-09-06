const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('<h3>Hello NodeJs on David Wiles Heroku</h3></br>');   

});

app.listen(process.env.PORT || 3000);
