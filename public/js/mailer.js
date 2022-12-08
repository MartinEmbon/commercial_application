
var nodemailer = require("nodemailer");

var sender = nodemailer.createTransport({
	service: 'gmail',
	host: 'smpt.gmail.com',
	secure: false,
	auth: {
		user: "syrahsommeliers@gmail.com",
		pass: "tdwyqeyddeqcymjr"
	}
});

var mail = {
	from: "syrahsommeliers@gmail.com",
	to: "martinembon@hotmail.com",
	subject: "Sending Email using Node.js",
	text: "That was easy!",
	attachments: [
		{
			filename: 'test.pdf',
			path: __dirname + '/test.pdf',
			cid: 'uniq-test.pdf'
		}
	]
};

sender.sendMail(mail, function (error, info) {
	if (error) {
		console.log(error);
	} else {
		console.log("Email sent successfully: "
			+ info.response);
	}
});

