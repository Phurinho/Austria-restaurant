const express = require('express');
const axios = require('axios'); 
const router = express.Router();
require('dotenv').config();

router.post('/send-whatsapp', async (req, res) => {
  const { date, name, phone, email, count, details, check } = req.body;

  const url = `https://graph.facebook.com/v22.0/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`;
  

  try {
    const response = await axios.post(url, {
      messaging_product: 'whatsapp',
      to: process.env.STORE_PHONE_NUMBER,
      type: 'template',
      template: {
        name: 'new_order_book_notification',
        language: { code: 'en_US' },
        components: [
          {
            type: 'body',
            parameters: [
              { type: 'text', text: name },
              { type: 'text', text: phone },
              { type: 'text', text: email },
              { type: 'text', text: date },
              { type: 'text', text: count },
              { type: 'text', text: details },
              { type: 'text', text: check }
            ]
          }
        ]
      },

    }, {
      headers: {
        'Authorization': `Bearer ${process.env.WHATSAPP_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });

    res.json({ success: true, data: response.data });
  } catch (error) {
    console.error('Error sending WhatsApp message:', error.response ? error.response.data : error.message);
    res.json({ success: false, error: error.response ? error.response.data : error.message });
  }
});

module.exports = router;
