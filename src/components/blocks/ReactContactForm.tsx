import { useState, type FormEvent, type ChangeEvent } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from '@headlessui/react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ReactContactForm = () => {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await emailjs.send(
        'contact_email_react',
        'contact_form',
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        'VXTHC019o49w3ab6L'
      );
      
      setSubmitted(true);
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setError('Failed to send message. Please try again.');
      console.error('EmailJS error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="react-name" className="block font-medium text-gray-700">
            Name
          </label>
          <input
            id="react-name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            required
            disabled={loading}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="react-email" className="block font-medium text-gray-700">
            Email
          </label>
          <input
            id="react-email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            disabled={loading}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="react-subject" className="block font-medium text-gray-700">
            Subject
          </label>
          <input
            id="react-subject"
            name="subject"
            type="text"
            value={form.subject}
            onChange={handleChange}
            required
            disabled={loading}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="react-message" className="block font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="react-message"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            disabled={loading}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
        <Button 
          type="submit" 
          disabled={loading}
          className="w-full bg-primary-500 text-white py-2 px-4 rounded-md hover:bg-primary-600 disabled:opacity-50"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
      
      {submitted && (
        <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-md" role="alert">
          Message sent successfully!
        </div>
      )}
      
      {error && (
        <div className="mt-4 p-3 bg-red-100 text-red-800 rounded-md" role="alert">
          {error}
        </div>
      )}
    </div>
  );
};

export default ReactContactForm;
