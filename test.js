
var express = require('express')
var app = express()
var path = require("path");
var Gpio = require('onoff').Gpio;
var led = new Gpio(18,'out');

//var led = require('./led.js')

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/index.html'));
})

app.post('/',function(req, res){
    req.on('data', function(data){
        if( data == "radio=ON") led.writeSync(1);
        else led.writeSync(0);
    })
});


/*
 app.get('/led', function (req,res){
 res.sendFile(path.join(__dirname+'/index.html'));
 return led(app);
 });
 */

app.listen(8080, function () {
    console.log('Example app listening on port 3000!')
})
