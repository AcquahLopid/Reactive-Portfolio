import React, { useState } from "react";
import { validationEmail } from "../Utils/SubmissionValidation";
import "./Contact.css";
import GoToTop from '../Utils/GoToTop';

function Contact() {
  const [message, setMessage] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessages, setErrorMessages] = useState({
    email: "",
    userName: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      setEmail(value);
    } else if (name === "userName") {
      setUserName(value);
    } else {
      setMessage(value);
    }
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const newErrorMessages = {};
  
    if (!validationEmail(email)) {
      newErrorMessages.email = "Invalid email";
    }
  
    if (!userName) {
      newErrorMessages.userName = "Name is required";
    }
  
    if (!message) {
      newErrorMessages.message = "Message is required";
    }
  
    if (Object.keys(newErrorMessages).length > 0) {
      setErrorMessages(newErrorMessages);
      return;
    }
  
    try {
      const formData = {
        name: userName,
        email: email,
        message: message,
      };
  
      // Send the form data to the server
      const response = await fetch("/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.status === 200) {
        console.log("Form data submitted successfully.");
        // After successful form submission, reset the form and error messages
        setUserName("");
        setMessage("");
        setEmail("");
        setErrorMessages({});
      } else {
        console.error("Form data submission failed.");
      }
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  

      // console.log("Form data:", formData);

    // After successful form submission, reset the form and error messages
    setUserName("");
    setMessage("");
    setEmail("");
    setErrorMessages({});
  };

  return (
    <section id="reach-out" className="contact">
      <div className="contact-form">
        <h1>Contact Me</h1>
        <form className="form">
          <label htmlFor="contact-name">Name</label>
          <input
            value={userName}
            name="userName"
            onChange={handleInputChange}
            type="text"
            id="contact-name"
            placeholder="Your Name"
            className="smaller-font"
          />
          {errorMessages.userName && (
            <p className="error-text">{errorMessages.userName}</p>
          )}

          <label htmlFor="contact-email">Email</label>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            id="contact-email"
            placeholder="Example@Gmail.com"
            className="smaller-font"
          />
          {errorMessages.email && (
            <p className="error-text">{errorMessages.email}</p>
          )}

          <label htmlFor="contact-message">Message</label>
          <textarea
            value={message}
            name="message"
            onChange={handleInputChange}
            id="contact-message"
            placeholder="Your Message"
            className="smaller-font"
          ></textarea>
          {errorMessages.message && (
            <p className="error-text">{errorMessages.message}</p>
          )}

          <button
            className="button-29"
            type="button"
            onClick={handleFormSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    <GoToTop/>
    </section>
  );
}

export default Contact;