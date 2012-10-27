var connect = require('connect');
var express = require('express');
var util = require('util');
//module.exports = require('./public/lib/node-google-weather');
//var Weather = require('./public/lib/node-google-weather').Weather;
//var weather = new Weather();

var SendGrid = require('./node_modules/sendgrid-nodejs').SendGrid;
var sendgrid = new SendGrid('mszwedo', 'mssendgrid');

var app = express();

var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));


app.get('/sendEmail', function(req,res) {

    console.log('inside sendEmail');

    var subjectLine = getSubject();
    var message = getMessage();
    //var weatherMessage = getWeather();
    //var emailMessage = message + ' ' + weatherMessage;

    sendgrid.send({
        to: 'szwedo@vt.edu',
        from: 'mike.szwedo@gmail.com',
        subject: subjectLine,
        text: message
    }, function(success, message) {
        if (!success) {
            console.log('Email Sent ->')
            console.log(message);
        }
    })
});

function getSubject() {
    var subject =  ["Its been awhile",
                    "Hi",
                    "Hello",
                    "How have you been?",
                    "Long time",
                    "How are you",
                    "Hey Stranger",
                    "What's up"];
    return subject[Math.floor(Math.random()*subject.length)];
}

function getMessage() {
    var message =  ["We need to catch up sometime soon.",
                    "Give me a call",
                    "Just wanted to let you know I was thinking of you",
                    "Having a great day.  Hope you are too.",
                    "Lets talk soon",
                    "How's your day going.",
                    "I've been meaning to call you.  Lets talk soon"]
    return message[Math.floor(Math.random()*message.length)];
}

function getWeather() {

    var options = {
        'query': {'weather': 'Denver, CO'},
        'format': 'plain'
    };

    var temp;
    var weatherMessage = "";

    weather.forecast(options, function(data) {
        // data will be an object with response
        console.log(data);
        temp = data;
    })

    if (temp < 55)
    {
        weatherMessage = "It sure is cold today."
    }
    else
    {
        weatherMessage = "The weather is really nice today."
    }

    return weatherMessage;
}

app.listen(8080,"127.0.0.1");

console.log("Running on port:[" + port + "]")
