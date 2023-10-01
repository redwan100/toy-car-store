import React from "react";
import { Link } from "react-router-dom";
import brand from "../../assets/brand.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-neutral text-neutral-content">
      <footer className="footer p-10  container mx-auto lg:w-[90%]">
        <div>
          <span className="footer-title">Our Brand</span>
          <Link to={"/"} className="link link-hover">
            <img src={brand} alt="" className="w-28" />
          </Link>
        </div>
        <div>
          <span className="footer-title">Products</span>
          <a className="link link-hover">Truck</a>
          <a className="link link-hover">Sports</a>
          <a className="link link-hover">Regular</a>
          <a className="link link-hover">Racing</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">BMW</a>
          <a className="link link-hover">Toyata</a>
          <a className="link link-hover">Ferarry</a>
          <a className="link link-hover">Toyata</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div>
          <span className="footer-title">Find Us</span>
          <div className="flex gap-4">
            <FaFacebookF size={20} className="cursor-pointer" />
            <FaInstagram size={20} className="cursor-pointer" />
            <FaTwitter size={20} className="cursor-pointer" />
            <FaLinkedinIn size={20} className="cursor-pointer" />
          </div>
        </div>
      </footer>
      <p className="text-center py-6">
        &copy; copyrights {new Date().getFullYear()}. All rights reserved by{" "}
        <span className="font-semibold gradient-text">REDWAN ISALM</span> Design
        by REDWAN ISLAM
      </p>
    </div>
  );
};

export default Footer;
