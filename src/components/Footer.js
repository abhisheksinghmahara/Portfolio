import React from 'react';

const Footer = () => {
  return (
    <footer style={{"borderRadius":"50px 50px 0px 0px"}} className="bg-black text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
