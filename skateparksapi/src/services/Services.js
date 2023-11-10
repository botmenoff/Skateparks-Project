const bcrypt = require('bcrypt');
const nodemailer = require("nodemailer");
const jwt = require('jsonwebtoken');
const fs = require('fs');

require('dotenv').config(); // Cargar las variables de entorno
const secretKey = process.env.SECRETKEY

async function hashPassword(password) {
    try {
        const saltRounds = 10; // Number of salt rounds to use for hashing
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (error) {
        throw new Error('Error hashing password');
    }
}

async function sendEmail(emailTo) {
    // Haces el objeto de transporter para poner toda la info
    const transporter = nodemailer.createTransport({
        host: "smtp.protonmail.com",
        port: 465,
        secure: true,
        auth: {
          user: "botmenSs@proton.me", 
          pass: "IfkZlk1rkCLX68IMwkvDFor@secureEmailandRemotesshllool"
        }
    });

    // Generamos el JWT
    const token = jwt.sign({ email: emailTo }, secretKey, { expiresIn: '1d' }); // Use a secret key and adjust expiresIn as needed

    // Contenido del mail
    const mailOptions = {
        from: "botmenSs@proton.me",
        to: emailTo, 
        subject: "Email Verification", // Email subject
        text: `Please use the following link to verify your email: http://example.com/verify?token=${token}` // Include the token in the URL
    };

    // Enviar el email
    try {
        const info = await transporter.sendMail(mailOptions);
        console.log("Message sent: %s", info.messageId);
        // Retorno el token para guardarlo en la BBDD
        return token
    } catch (error) {
        console.error("Error sending email:", error);
    }

}

module.exports = {
    hashPassword,
    sendEmail
}