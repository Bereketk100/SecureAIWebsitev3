import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    // Basic client-side validation improvements
    if (name.trim().length < 2) {
      setError('Please enter your full name.');
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (phone && !/^[+0-9().\-\s]{7,}$/.test(phone)) {
      setError('Please enter a valid phone number or leave it blank.');
      return;
    }
    if (message.trim().length < 10) {
      setError('Message should be at least 10 characters so we can assist you better.');
      return;
    }

    setError('');
    setIsSubmitting(true);

    fetch("https://formcarry.com/s/6ke1FR2Sql5", {
      method: 'POST',
      headers: { 
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, phone, message })
    })
      .then(response => response.json())
      .then(response => {
        if (response.code === 200) {
          setIsSuccess(true);
          setName('');
          setEmail('');
          setPhone('');
          setMessage('');
        } else {
          setError(response.message || 'Something went wrong. Please try again.');
        }
      })
      .catch(error => {
        setError(error.message ? error.message : 'Network error. Please retry.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  }

  if (isSuccess) {
    return (
      <div className="text-center p-8 bg-gray-900 rounded-lg" role="status" aria-live="polite">
        <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <h3 className="text-2xl font-semibold mb-4">Thank You!</h3>
        <p className="text-gray-300 mb-6">Your message has been sent successfully. We'll get back to you soon.</p>
        <button
          type="button"
          onClick={() => { setIsSuccess(false); setError(''); }}
          className="bg-blue-600 hover:bg-blue-500 py-3 px-8 rounded-lg text-white font-medium transition"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6" aria-describedby={error ? 'form-error' : undefined}>
      <div className="bg-gray-800/60 p-4 rounded-lg text-sm text-gray-300">
        Provide a few details and our team will reach out promptly. For urgent needs, submit the form and mark "URGENT" at the start of your message.
      </div>
      {error && (
        <div id="form-error" className="bg-red-600 text-white p-4 rounded-lg mb-4" role="alert">
          {error}
        </div>
      )}
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-200">Full Name *</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Jane Doe"
          required
          className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-blue-500 text-white"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-200">Email Address *</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
          className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-blue-500 text-white"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-200">Phone (optional)</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="(555) 555-5555"
          className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-blue-500 text-white"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-200">Message *</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us about your security needs, property type, and any challenges you're facing."
          rows="5"
          required
          className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-blue-500 text-white resize-none"
        ></textarea>
        <p className="mt-2 text-xs text-gray-500">Min 10 characters. Include any timing constraints.</p>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 hover:bg-blue-500 py-3 px-8 rounded-lg text-white font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm;
