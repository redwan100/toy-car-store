import React from 'react'
import {Link} from 'react-router-dom'
import brand from '../../assets/brand.png'
import {FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter} from 'react-icons/fa'
const Footer = () => {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <div>
        <span className="footer-title">Our Brand</span>
        <Link to={"/"} className="link link-hover">
          <img src={brand} alt="" className="w-28" />
        </Link>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
      <div>
        <span className="footer-title">Find Us</span>
        <div className='flex gap-4'>
          <FaFacebookF size={20} className='cursor-pointer'/>
          <FaInstagram size={20} className='cursor-pointer'/>
          <FaTwitter size={20} className='cursor-pointer'/>
          <FaLinkedinIn size={20} className='cursor-pointer'/>
        </div>
      </div>
    </footer>
  );
}

export default Footer