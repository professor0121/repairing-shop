import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Make sure fields are not empty
    if (!name || !email || !message) {
      setStatus('Please fill in all fields.');
      return;
    }

    // EmailJS service, template, and user IDs
    const serviceID = 'service_iuz4v7n'; // Replace with your EmailJS service ID
    const templateID = 'template_vjg23ln'; // Replace with your EmailJS template ID
    const userID = 'p-BiENLmxiF1wjM2I'; // Replace with your EmailJS user ID

    const templateParams = {
      name,
      email,
      message,
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        setStatus('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      }, (error) => {
        setStatus('Failed to send message. Please try again later.');
      });
  };

  return (
    <div className="contact-form-container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Send</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default ContactForm;
