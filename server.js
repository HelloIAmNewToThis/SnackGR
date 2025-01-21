const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => ) {
    const { name, email, food } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-email-password',
        },
    });

    const mailOptions = {
        from: 'your-email@gmail.com',
        to: 'yaminarmin213@gmail.com',
        subject: 'Neue Snack-Anfrage',
        text: `Hallo, mein Name ist ${name}. Ich möchte bitte: ${food}\n\nKontakt: ${email}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email sent successfully!');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Failed to send email.');
    }
    const PORT = process.env.PORT || 3000; // Use Render's PORT if available
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);

});


