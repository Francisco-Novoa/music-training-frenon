
const nodemailer = require('@nodemailer/pro');
const template = require('./confirmation')
const env = require('node-env-file');
env(__dirname + '/.env');


let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.user,
        pass: process.env.pass
    }
});

transporter.verify( function(error, sucess){
    if(error){
        console.log(error);
    }else{
        console.log('EL server de email se encuentra conectado');
    }
});

function mailOptions(nombre,email,recipient) {
    return{
    from: `${nombre}<${email}>`,
    to: `${recipient}`,
    subject: 'Email testing',
    text: 'EMAIL DE PRUEBA',
    html: template.emailConfirmacion({nombre,hash:"5887d4fc097486a5e9e3e23a"})
}}

const sendMail =transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }else{
        console.log('Message %s sent: %s', info.messageId, info.response);
    }
});

module.exports= {mailOptions,sendMail}