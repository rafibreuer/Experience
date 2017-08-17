require('dotenv').config();
import * as nodemailer from 'nodemailer';

export function sendRequest(obj: any) {
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
        to: process.env.MY_NAME,
        subject: 'New Request',
        html: obj.url + '<br> Description : ' + obj.description + '<br> Name: ' + obj.name + '<br> Author: ' + obj.author
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log('error: ', error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
}