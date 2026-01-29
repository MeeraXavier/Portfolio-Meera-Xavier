"use client";

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<{ type: 'idle' | 'success' | 'error', message: string }>({ type: 'idle', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name: string, value: string) => {
    let error = '';
    
    switch (name) {
      case 'name':
        if (!value.trim()) error = 'Name is required';
        else if (value.length < 2) error = 'Name must be at least 2 characters';
        else if (/\d/.test(value)) error = 'Name should not contain numbers';
        break;
      case 'email':
        if (!value) error = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Please enter a valid email address';
        }
        break;
      case 'message':
        if (!value.trim()) error = 'Message is required';
        else if (value.length < 10) error = 'Message must be at least 10 characters';
        break;
    }
    
    return error;
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setTouched(prev => ({ ...prev, [id]: true }));
    
    const error = validateField(id, value);
    setErrors(prev => ({
      ...prev,
      [id]: error
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    
    // Only validate if the field has been touched
    if (touched[id]) {
      const error = validateField(id, value);
      setErrors(prev => ({
        ...prev,
        [id]: error
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    let isValid = true;
    
    // Validate all fields
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    });
    
    setErrors(newErrors);
    // Mark all fields as touched to show errors
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true
    });
    
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setStatus({ 
        type: 'error', 
        message: 'Please fix the errors in the form before submitting.' 
      });
      return;
    }
    
    setIsSubmitting(true);
    setStatus({ type: 'idle', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ 
          type: 'success', 
          message: 'Message sent successfully! I\'ll get back to you soon.' 
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        const error = await response.json();
        throw new Error(error.message || 'Something went wrong');
      }
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: error instanceof Error ? error.message : 'Failed to send message. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <main className="min-h-screen pt-24 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-2 text-white">Get In <span className="text-purple-400">Touch</span></h1>
      <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
        <p className="text-lg mb-8 text-gray-300">
          I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        
        <div className="space-y-6">
          <div className="flex items-start space-x-4 hover:bg-gray-700/50 p-3 rounded-lg transition-colors">
            <div className="text-purple-400 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white">Email</h3>
              <a href="mailto:meeramjmeera@gmail.com" className="text-gray-300 hover:text-purple-400 transition-colors">
                meeramjmeera@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4 hover:bg-gray-700/50 p-3 rounded-lg transition-colors">
            <div className="text-purple-400 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white">Location</h3>
              <p className="text-gray-300">Kochi, India</p>
            </div>
          </div>

          <div className="flex items-start space-x-4 hover:bg-gray-700/50 p-3 rounded-lg transition-colors">
            <div className="text-purple-400 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white">Open to Work</h3>
              <p className="text-gray-300">Available for freelance & full-time positions</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6 text-white">Send Me a <span className="text-purple-400">Message</span></h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full bg-gray-700/30 border ${
                    errors.name ? 'border-red-500' : 'border-gray-600'
                  } rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-colors`}
                  placeholder="Your name"
                  required
                />
                {errors.name && touched.name && (
                  <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full bg-gray-700/30 border ${
                    errors.email ? 'border-red-500' : 'border-gray-600'
                  } rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-colors`}
                  placeholder="your.email@example.com"
                  required
                />
                {errors.email && touched.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                )}
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full bg-gray-700/30 border ${
                  errors.subject ? 'border-red-500' : 'border-gray-600'
                } rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-colors`}
                placeholder="How can I help you?"
              />
              {errors.subject && touched.subject && (
                <p className="mt-1 text-sm text-red-400">{errors.subject}</p>
              )}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full bg-gray-700/30 border ${
                  errors.message ? 'border-red-500' : 'border-gray-600'
                } rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-colors`}
                placeholder="Your message..."
                required
              ></textarea>
              {errors.message && touched.message && (
                <p className="mt-1 text-sm text-red-400">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors duration-200 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105 transform'} transition-all`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {status.message && (
              <div className={`mt-4 p-3 rounded-md ${status.type === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                {status.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}
