import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 mt-15">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        
        <div>
          <h3 className="text-xl font-semibold text-white">About GreenPulse</h3>
          <p className="mt-2 text-sm">
            GreenPulse is dedicated to supporting green movements and fundraising campaigns, empowering organizations to create a sustainable future.
          </p>
        </div>

       
       
        <div>
          <h3 className="text-xl font-semibold text-white">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><Link to="/" className="hover:text-green-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-green-400">About</Link></li>
            <li><Link to="/impact" className="hover:text-green-400">Impact</Link></li>
          </ul>
        </div>

        
        
        <div>
          <h3 className="text-xl font-semibold text-white">Contact Us</h3>
          <p className="mt-2 text-sm">Email: <a href="#" className="hover:text-green-400">Select Us plzzz</a></p>
          <p className="mt-1 text-sm">Phone : :-)</p>
        </div>

       
       
        <div>
          <h3 className="text-xl font-semibold text-white">Newsletter</h3>
          <form className="mt-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:border-green-400 text-white"
            />
            <button className="mt-2 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded">Subscribe</button>
          </form>
        </div>
      </div>
      

      <div className="text-center mt-10 border-t border-gray-700 pt-5 text-sm">
        &copy; 2025 GreenPulse. All rights reserved. | <Link to="/privacy-policy" className="hover:text-green-400">Privacy Policy</Link> | <Link to="/terms-of-service" className="hover:text-green-400">Terms of Service</Link>
      </div>
    </footer>
  );
};

export default Footer;
