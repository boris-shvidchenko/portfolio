// This is the API that will be used to send user messages to our email. Code has been referenced from 'https://medium.com/nerd-for-tech/coding-a-contact-form-with-next-js-and-nodemailer-d3a8dc6cd645' and uses nodemailer and dotenv.

export default function (req, res) {
    require('dotenv').config();
    let nodemailer = require('nodemailer');
    // Transporter will define the 'metadata' for the email submission process
    const transporter = nodemailer.createTransport({
        port: 465,
        host: 'smtp.gmail.com',
        auth: {
            user: 'bshvid.contact@gmail.com',
            pass: process.env.password,
        },
        secure: true,
    });

    // Template for how the message will be seen as once sent. From = a dummy email address for privacy purposes.
    const mailData = {
        from: 'bshvid.contact@gmail.com',
        to: 'bshv2020@gmail.com',
        subject: `New message from ${req.body.fullName}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<div>${req.body.message}</div><p>Sent from:
        ${req.body.email}</p>`
    };

    // Send the email and log any errors 
    transporter.sendMail(mailData, function (err, info) {
        if (err) {
            console.log(err);
        } else {
            console.log(info);
        }
        res.send(200);
    });
}