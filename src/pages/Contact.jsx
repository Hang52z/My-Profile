// src/components/Contact.jsx
import React from 'react';

const Contact = () => (
  <div className="container mx-auto px-6 py-16" id="contact">
    <h2 className="text-4xl font-semibold mb-6">Contact</h2>
    <p className="text-gray-700 mb-4">
      Email:{' '}
      <a
        href="mailto:hangzhao221@gmail.com"
        className="text-blue-500 hover:underline"
      >
        hangzhao221@gmail.com
      </a>
    </p>
    <p className="text-gray-700 mb-4">
      Phone:{' '}
      <a
        href="tel:0466886674"
        className="text-blue-500 hover:underline"
      >
        0466-886-674
      </a>
    </p>
    <div className="flex space-x-6">
      <a
        href="https://github.com/Hang52z"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-gray-900"
      >
        GitHub
      </a>
      <a
        href="https://www.linkedin.com/in/hang-zhao221"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-gray-900"
      >
        LinkedIn
      </a>
    </div>
  </div>
);

export default Contact;