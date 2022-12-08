var nodemailer = require('nodemailer');

// Create the transporter with the required configuration for Outlook
// change the user and pass !
var transporter = nodemailer.createTransport({
    "host": "smtp-mail.outlook.com",
"secure":false,
    auth: {
        user: "martinembon@hotmail.com",
        pass: "Dianakupervaser5"
    }
});

// setup e-mail data, even with unicode symbols
var mailOptions = {
    from: 'martinembon@hotmail.com', // sender address (who sends)
    to: 'martinembon@hotmail.com', // list of receivers (who receives)
    subject: 'Hello ', // Subject line
    text: 'Hello world ', // plaintext body
    html: 'Hello world his is the first email sent with Nodemailer in Node.js' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }

    console.log('Message sent: ' + info.response);
});