require("dotenv").config()
const nodemailer = require("nodemailer")
var multer  = require('multer');
var fileUpload= require('../upload-middleware');



let userController = {
    fileUploadForm:function(req,res){
        res.render('index');
     },
     uploadFile:function(req,res){
        var upload = multer({
                    storage: fileUpload.files.storage(), 
                    allowedFile:fileUpload.files.allowedFile 
                    }).single('file');
        upload(req, res, function (err) {
           if (err instanceof multer.MulterError) {
              res.send(err);
           } else if (err) {
              res.send(err);
           }else{
              res.render('index');
           }
           
        })
        
     },    
    index: (req, res) => {
        return res.render("index")
    },
    email: (req, res) => {
        const files = req.files
            var upload = multer({
                        storage: fileUpload.files.storage(), 
                        allowedFile:fileUpload.files.allowedFile 
                        }).single('file'); upload(req, res, function (err) {
                            if (err instanceof multer.MulterError) {
                               res.send(err);
                            } else if (err) {
                               res.send(err);
                            }else{
                               res.render('index');
                            }
                            
                         })
        
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
                filename: req.body.file,
                path: `uploads/generated (3).pdf`,
                'contentType':'application/pdf'
            }]

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
