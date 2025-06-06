// api/sendEmail.js
const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();

const router = express.Router();

router.post('/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,       
      pass: process.env.EMAIL_PASS        
    }
  });

  const mailOptions = {
    from: `"Feedback Bot" <${process.env.EMAIL_USER}>`,  
    to: process.env.EMAIL_RECEIVER,                     
    replyTo: email,                                      
    subject: `New Feedback: ${subject}`,                
    text: `You received a new feedback:\n\nFrom: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage:\n${message}`,
    html: `
      <h2>New Feedback Received</h2>
      <p><strong>From:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>
    `
  };
  console.log('Receiver Email:', process.env.EMAIL_RECEIVER);
  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
