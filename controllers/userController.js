require("dotenv").config()
const nodemailer = require("nodemailer")

let userController = {
    index:(req,res)=> {
        return res.render("home")
    },
    email:(req,res)=> {
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
            from:'syrahsommeliers@gmail.com' ,             
            to:'martinembon@hotmail.com' ,
            subject:`Message from ${req.body.name}`,
            text: `${req.body.message}`
        
        };
        transporter.sendMail(mailOptions, (err, data) => {
            if (err) {
                console.log('Error al enviar',err);
            } else {
            console.log('Email enviado!!!');
            }
        });
        return res.redirect("/")        
    }            
}

module.exports = userController