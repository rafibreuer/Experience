require('dotenv').config();
import * as nodemailer from 'nodemailer';

export function sendTempToken(email: string, token: string, url: string) {
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_NAME,
            pass: process.env.EMAIL_PASSWORD
        }
    });



    let mailOptions = {
        from: process.env.EMAIL_NAME,
        to: email,
        subject: 'Thank you from adopt a kollel',
        html: `<div>Thank you for becoming a sponsor</div>`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log('error: ', error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
}
