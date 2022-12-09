require("dotenv").config()
const nodemailer = require("nodemailer")
var multer = require('multer');
var fileUpload = require('../upload-middleware');

let userController = {

    index: (req, res) => {
        return res.render("index")
    },
    email: (req, res) => {
        let nombre=req.body.name
        let email = req.body.email
        let text = req.body.message
                var upload = multer({
            storage: fileUpload.files.storage()
            // allowedFile: fileUpload.files.allowedFile
        }).single('file');
        upload(req, res, function (err) {
            if (err instanceof multer.MulterError) {
                res.send(err);
            }
        })
        let mailOptions = {
            from: email,
            to: 'martinembon@hotmail.com',
            subject: `Message from ${nombre}`,
            text: text,
            attachments: [{
                filename: "",
                //  path: __dirname+`/uploads/${req.body.file}`,
                path: __dirname + "/uploads"
            }]
        };

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smpt.gmail.com',
            secure: false,
            auth: {
                user: "syrahsommeliers@gmail.com",
                pass: "tdwyqeyddeqcymjr"
            }
        });

        console.log(mailOptions)
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
