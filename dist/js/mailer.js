import { SMTPClient } from 'emailjs';
const app = require("express")
const client = new SMTPClient({
	user: 'user',
	password: 'password',
	host: 'smtp.your-email.com',
	ssl: true,
});

// send the message and get a callback with an error or details of the message that was sent
client.send(
	{
		text: 'i hope this works',
		from: 'martinembon@hotmail.com',
		to: 'martinembon@hotmail.com',
		subject: 'testing emailjs',
	},
	(err, message) => {
		console.log(err || message);
	}
);

app.listen(3000)