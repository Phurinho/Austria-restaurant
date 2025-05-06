async function sendWhatsAppMessage(event) {
  event.preventDefault();

  const date = document.getElementById('date').value;
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const count = document.getElementById('count').value;
  const details = document.getElementById('details').value;
  const check = document.querySelector('input[name="check"]:checked').value;

  try {
    const response = await fetch('/api/send-whatsapp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ date, name, phone, email, count, details, check })
    });

    const data = await response.json();

    if (data.success) {
      alert('Order sent successfully via WhatsApp!');
    } else {
      alert('Failed to send order via WhatsApp.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Something went wrong.');
  }
}
