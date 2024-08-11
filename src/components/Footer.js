import React from 'react';
const Footer = () => {
  return (
    <footer className="bg-primary-color text-white py-6 bg-blue-500..." >
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;