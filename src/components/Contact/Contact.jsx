import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";

import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    contact: "",
    website: "",
    services: [],
    budget: "",
    source: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        services: checked
          ? [...prevData.services, value]
          : prevData.services.filter((service) => service !== value),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="contact-page">
      <div className="container">
        {/* Contact Form */}
        <div className="contact-form">
          <h2>Get in Touch</h2>
          <form onSubmit={handleSubmit}>
            {/* Name and Organization */}
            <div className="row">
              <div className="flex flex-col ">
                <label>Your Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="ip-4"
                />
              </div>
              <div className="flex flex-col ">
                <label>Your Organization's Name</label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="ip-4"
                />
              </div>
            </div>

            {/* Email and Contact */}
            <div className="row">
              <div className="flex flex-col ">
                <label>Your Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="ip-4"
                />
              </div>
              <div className="flex flex-col ">
                <label>Your Contact</label>
                <input
                  type="tel"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  className="ip-4"
                />
              </div>
            </div>

            {/* Website */}
            <label>Website / Social Media Link</label>
            <input
              type="url"
              name="website"
              value={formData.website}
              onChange={handleChange}
            />

            {/* Services */}
            <label>What services are you interested in?</label>
            <div className="checkbox-group">
              <label>
                <input
                  type="checkbox"
                  name="services"
                  value="Logo design"
                  onChange={handleChange}
                />
                Logo design
              </label>
              <label>
                <input
                  type="checkbox"
                  name="services"
                  value="Brand identity development"
                  onChange={handleChange}
                />
                Brand identity development
              </label>
              <label>
                <input
                  type="checkbox"
                  name="services"
                  value="Packaging design"
                  onChange={handleChange}
                />
                Packaging design
              </label>
              <label>
                <input
                  type="checkbox"
                  name="services"
                  value="Brand consultation"
                  onChange={handleChange}
                />
                Brand consultation
              </label>
            </div>

            {/* Budget */}
            <label>How much are you looking to invest in this project?</label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="dpdn"
            >
              <option value="">Select</option>
              <option value="₹1,20,000 to ₹2,50,000">
                ₹1,20,000 to ₹2,50,000
              </option>
              <option value="₹2,50,000 to ₹5,00,000">
                ₹2,50,000 to ₹5,00,000
              </option>
              <option value="₹5,00,000 and above">₹5,00,000 and above</option>
            </select>

            {/* Source */}
            <label>And lastly, how did you hear about us?</label>
            <select
              name="source"
              value={formData.source}
              onChange={handleChange}
              className="dpdn"
            >
              <option value="">Select</option>
              <option value="Instagram">Instagram</option>
              <option value="Referral">Referral</option>
            </select>

            <button type="submit">Let's Connect!</button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <h2>
            Let’s make it <br /> a reality!
          </h2>
          <p>
            We're excited to work with you soon! Please share your details &
            we'll get back in 2-3 working days.
          </p>
          <p>Contact</p>
          <p className="flex items-center ">
            <FaEnvelope />
            <a href="mailto:dzinr.co@gmail.com" className="pl-2 ">
              dzinr.co@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
