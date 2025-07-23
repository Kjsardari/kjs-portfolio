import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const EmailForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'service_cvsyxce';
    const templateId = 'template_eitctdy';
    const publicKey = '3uGvdHZ5m6C-vB0Op';

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Kamaljeet Singh',
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className='emailForm'>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <textarea
        cols="30"
        rows="10"
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      ></textarea>
      <button type="submit">Send Email</button>
    </form>
  );
};

export default EmailForm;
