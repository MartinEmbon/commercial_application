require("dotenv").config()
const nodemailer = require("nodemailer")
const fs = require("fs")
let userController = {
    index: (req, res) => {
        return res.render("index")
    },
    email: (req, res) => {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smpt.gmail.com',
            secure: false,
            auth: {
                user: "syrahsommeliers@gmail.com",
                pass: "tdwyqeyddeqcymjr"
            }
        });
        let mailOptions = {
            from: req.body.email,
            to: 'martinembon@hotmail.com',
            subject: `Message from ${req.body.name}`,
            text: `${req.body.message}`,
            attachments: [{
                'filename': 'generated.pdf',
                'path':"./public/generated.pdf",
                'contentType':'application/pdf'
            }]

            // attachments: [{
            //     filename: req.body.file,

            //     //content: 'pdf',
            //     //contentType: 'application/pdf'
            // }]

        };
        transporter.sendMail(mailOptions, (err, data) => {
            if (err) {
                console.log('Error al enviar', err);
            } else {
                console.log('Email enviado!!!');
            }
        });
        return res.redirect("/")
    }
}

module.exports = userController