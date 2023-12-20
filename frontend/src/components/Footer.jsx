import React from "react";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
   <><div className="footer bg-gray-200 h-4 flex justify-around border-t-4 border-coffee"></div>
    <div className="footer bg-gray-200 p-12 flex justify-around">
      <div className="heading-footer text-3xl font-extrabold p-4">
        <a href="/" className="flex items-center">
          <img src="./logo-bg.png" className="h-40" alt="Logo" />
        </a>
      </div>
      <div className="div1">
        <h4 className="footer-h4 font-semibold text-lg">Who We Are</h4>
        <a href="/about"><p className="footer-p">About Us</p></a>
        <p className="footer-p">Our Work</p>
        <p className="footer-p">Contact</p>
      </div>
      <div className="div2">
        <h4 className="footer-h4 font-semibold text-lg">Get Involved</h4>
        <p className="footer-p">Request For Food</p>
        <p className="footer-p">Partner with Us</p>
      </div>
      <div className="div3">
        <h4 className="footer-h4 font-semibold text-lg">Socials</h4>
        <div className="footer-icons flex flex-row space-x-4 mt-4">
          <p className="footer-p text-coffee">
            <FaInstagram size={30} />
          </p>
          <p className="footer-p text-coffee">
            <FaTwitter size={30} />
          </p>
          <p className="footer-p text-coffee">
            <FaFacebook size={30} />
          </p>
        </div>
      </div>
    </div>
    <div className="text-center py-4">
        Design and Developed by @<a href="https://github.com/Sanjaykumarbhupathi" >Sanjay Kumar Bhupathi</a>
      </div></>
  );
};

export default Footer;
