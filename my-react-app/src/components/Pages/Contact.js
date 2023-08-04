// import React, { useState } from "react";
// import { validaitionEmail } from "../Utils/SubmissionValidation";
// import "./Contact.css";

// function Contact() {
//   const [message, setMessage] = useState("");
//   const [userName, setUserName] = useState("");
//   const [email, setEmail] = useState("");
//   const [errorMessages, setErrorMessages] = useState({
//     email: "",
//     userName: "",
//     message: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;

//     if (name === "email") {
//       setEmail(value);
//     } else if (name === "userName") {
//       setUserName(value);
//     } else {
//       setMessage(value);
//     }
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     const newErrorMessages = {};

//     if (!validaitionEmail(email)) {
//       newErrorMessages.email = "Invalid email";
//     }

//     if (!userName) {
//       newErrorMessages.userName = "Name is required";
//     }

//     if (!message) {
//       newErrorMessages.message = "Message is required";
//     }

//     if (Object.keys(newErrorMessages).length > 0) {
//       setErrorMessages(newErrorMessages);
//       return;
//     }

//     // TODO: Your form submission logic here
//     const formData = {
//         name: userName,
//         email: email,
//         message: message,
//       };

//       console.log("Form data:", formData);

//     // After successful form submission, reset the form and error messages
//     setUserName("");
//     setMessage("");
//     setEmail("");
//     setErrorMessages({});
//   };

//   return (
//     <section id="reach-out" className="contact">
//       <div className="contact-form">
//         <h3>Contact Me</h3>
//         <form className="form">
//           <label htmlFor="contact-name">Name</label>
//           <input
//             value={userName}
//             name="userName"
//             onChange={handleInputChange}
//             type="text"
//             id="contact-name"
//             placeholder="Your Name"
//           />
//           {errorMessages.userName && (
//             <p className="error-text">{errorMessages.userName}</p>
//           )}

//           <label htmlFor="contact-email">Email</label>
//           <input
//             value={email}
//             name="email"
//             onChange={handleInputChange}
//             type="email"
//             id="contact-email"
//             placeholder="Your Email"
//           />
//           {errorMessages.email && (
//             <p className="error-text">{errorMessages.email}</p>
//           )}

//           <label htmlFor="contact-message">Message</label>
//           <textarea
//             value={message}
//             name="message"
//             onChange={handleInputChange}
//             id="contact-message"
//             placeholder="Your Message"
//           ></textarea>
//           {errorMessages.message && (
//             <p className="error-text">{errorMessages.message}</p>
//           )}

//           <button
//             className="button-29"
//             role="button"
//             type="button"
//             onClick={handleFormSubmit}
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }

// export default Contact;

// NEEDS SECURITY FOR MY NODEMAILER FUTURE UPDATE!!

import React from "react";
import "./Contact.css"; // Add your own CSS file for styling

const Contact = () => {
  const email = "your.email@example.com";
  const githubUrl = "https://github.com/your-github-username";
  const linkedinUrl = "https://www.linkedin.com/in/your-linkedin-username";
  const phoneNumber = "123-456-7890"; // Replace with your actual phone number

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"></link>
      <section id="contact" className="contact-section">
        <h2>Contact</h2>
        <div className="contact-info">
          <p>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
              GitHub
            </a>
          </p>
          <p>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
              LinkedIn
            </a>
          </p>
          {phoneNumber && (
            <p>
              <i className="fas fa-phone-alt"></i>
              {phoneNumber}
            </p>
          )}
          <p>
            <a href={`mailto:${email}`}>
              <i className="fas fa-envelope"></i>
              {email}
            </a>
          </p>
        </div>
      </section>
    </>
  );
};

export default Contact;
