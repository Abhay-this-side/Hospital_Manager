import React from "react";
import { Link } from "react-router-dom";
import { FaLocationArrow, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./Footer.css"// Make sure to import the CSS file

const Footer = () => {
  const hours = [
    { id: 1, day: "Pediatrics:", time: "4:00 PM - 9:00 PM" },
    { id: 2, day: "Orthopedics:", time: "12:00 PM - 3:00 PM" },
    { id: 3, day: "Cardiology:", time: "10:00 AM - 11:30 AM" },
    { id: 4, day: "Neurology:", time: "11:00 AM - 2:00 PM" },
    { id: 5, day: "Oncology:", time: "9:00 AM - 12:00 PM" },
    { id: 6, day: "Radiology:", time: "6:00 PM - 7:00 PM" },
    { id: 7, day: "Physical Therapy:", time: "10:00 AM - 8:00 PM" },
    { id: 8, day: "Dermatology:", time: "9:00 AM - 1:00 PM" },
    { id: 9, day: "ENT:", time: "9:00 AM - 3:00 PM" },
  ];

  return (
    <footer className="footer">
      <div className="content">
        <div className="links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/appointment"}>Appointment</Link></li>
            <li><Link to={"/about"}>About</Link></li>
          </ul>
        </div>
        <div className="hours">
          <h4>Hours</h4>
          <ul>
            {hours.map((element) => (
              <li key={element.id}>
                <span>{element.day} </span>
                <span>{element.time}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="contacts">
          <h4>Contact</h4>
          <div>
            <FaPhone />
            <span>999-999-9999</span>
          </div>
          <div>
            <MdEmail />
            <span>asaanlab@gmail.com</span>
          </div>
          <div>
            <FaLocationArrow />
            <span>Dehradun, Uttarakhand</span>
          </div>
        </div>
        <div className="logo">
          <img src="/logo.png" alt="logo" />
          <div className="company-name">
            ASAAN
          </div>
        </div>
      </div>
      <div className="copyright">
        &copy; 2024 Asaan. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
