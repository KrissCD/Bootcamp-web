import React from 'react';
import Navbar from './Navbar';
// Import icons from react-icons
import { MdEmail } from 'react-icons/md';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <h1>Contact</h1>
      <p>If you have any questions, feel free to reach out!</p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ marginBottom: '10px' }}>
          <a
            href="mailto:kristian.pernjekmm@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}
          >
            <MdEmail style={{ marginRight: '8px' }} />
            Email
          </a>
        </li>
        <li style={{ marginBottom: '10px' }}>
          <a
            href="https://instagram.com/kpernjek"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}
          >
            <FaInstagram style={{ marginRight: '8px' }} />
            Instagram
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/kristian-pernjek"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}
          >
            <FaLinkedin style={{ marginRight: '8px' }} />
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;