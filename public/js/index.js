//module.exports = require('../lib/node-google-weather');

$("#addBtn").live('click',function() {
    //var emailType = $('#emailType');
    $.mobile.changePage('#messageSentDialog', 'pop', true, true);
    sendEmail();
})

function sendEmail() {
    $.ajax({
        //The URL to process the request
        'url' : '/sendEmail',
        //The type of request, also known as the "method" in HTML forms
        //Can be 'GET' or 'POST'
        'type' : 'GET'
    });
}

$('#number').bind('change', function(){
    saveNumber();
});

function saveNumber(){
    $('#display').html('');
    var number = $('#number');
    // now this variable stores the value you need you can use this !!
    //$('#display').append( '<p>' number '</p>');
}



