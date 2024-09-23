import React, { useState } from "react";
import "../componentCss/InquiryForm.css";
import { AiOutlineClose } from "react-icons/ai";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InquiryForm = ({ onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  const handleContactChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setContact(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with:", { name, email, contact, message });

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = "service_fvtxkpg";
    const templateId = "template_g1h964q";
    const publicKey = "zpFdGqnm1qQ2wAeYy";

    // Create a new object that contains dynamic-template params
    const templateParams = {
      from_name: name,
      from_email: email,
      from_contact: contact,
      to_name: "Nartan Academy",
      message: message,
    };

    // Send the enquiry using Emailjs
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Enquiry sent successfully!", response);
        setName("");
        setEmail("");
        setContact("");
        setMessage("");
        toast.success("Enquiry sent successfully! We will contact you soon.");
        onClose(); // Close the form after successful submission
      })
      .catch((error) => {
        console.log("Error sending email:", error);
        toast.error("Failed to send email. Please try again.");
      });
  };

  return (
    <div className="inquiry-form-overlay">
      <div className="inquiry-form">
        <button className="close-button" onClick={onClose}>
          <AiOutlineClose />
        </button>
        <h2>
          <strong>
            Enquiry <span className="text-warning">Form</span>
          </strong>{" "}
        </h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Contact:
            <input
              type="tel"
              value={contact}
              onChange={handleContactChange}
              required
            />
          </label>
          <label>
            Message:
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="4"
              placeholder="Optional..."
            />
          </label>
          <button type="submit">Submit</button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default InquiryForm;
