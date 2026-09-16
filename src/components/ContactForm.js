import React, { useState } from 'react';

const inputClasses =
  'w-full px-4 py-3.5 bg-white border border-mist-300 text-navy-900 placeholder-slateink-500/70 text-sm focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600 transition-colors';
const labelClasses =
  'block font-display text-[11px] font-bold uppercase tracking-eyebrow text-slateink-600 mb-2';

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
      <div className="text-center py-6" role="status" aria-live="polite">
        <div className="w-16 h-16 mx-auto bg-brand-600 flex items-center justify-center">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-6 font-display font-extrabold text-2xl text-navy-800">Request Received</h3>
        <p className="mt-3 text-sm leading-relaxed text-slateink">
          Thank you. Your message has reached our operations team and we will
          follow up shortly — usually the same business day.
        </p>
        <button
          type="button"
          onClick={() => { setIsSuccess(false); setError(''); }}
          className="mt-8 bg-navy-800 hover:bg-brand-600 text-white font-display font-bold text-xs uppercase tracking-wider px-8 py-4 transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" aria-describedby={error ? 'form-error' : undefined}>
      <div>
        <p className="eyebrow text-brand-600">Request a Quote</p>
        <p className="mt-4 text-sm leading-relaxed text-slateink">
          Share a few details about the property and the coverage you need. All
          fields marked with an asterisk are required.
        </p>
      </div>

      {error && (
        <div id="form-error" className="border-l-4 border-red-600 bg-red-50 text-red-800 px-4 py-3 text-sm" role="alert">
          {error}
        </div>
      )}

      <div>
        <label htmlFor="name" className={labelClasses}>Full Name *</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Jane Doe"
          required
          className={inputClasses}
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className={labelClasses}>Email Address *</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            required
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClasses}>Phone (optional)</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="(555) 555-5555"
            className={inputClasses}
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className={labelClasses}>How Can We Help? *</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Property type, address or area, hours you need covered, and anything that hasn't worked with previous providers."
          rows="5"
          required
          className={`${inputClasses} resize-none`}
        ></textarea>
        <p className="mt-2 text-xs text-slateink-500">
          Minimum 10 characters. Start with &ldquo;URGENT&rdquo; for same-day coverage needs.
        </p>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-brand-600 hover:bg-navy-800 text-white font-display font-bold text-xs uppercase tracking-wider py-4 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending…' : 'Send Request'}
      </button>
      <p className="text-xs text-slateink-500 leading-relaxed">
        Your information is used only to respond to this request and is never
        shared with third parties.
      </p>
    </form>
  );
};

export default ContactForm;
