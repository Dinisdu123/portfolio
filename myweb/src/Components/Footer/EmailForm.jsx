import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../Footer/EmailForm.css";

const EmailForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = "service_0scc1x8";
    const templateId = "template_ekojmks";
    const publicKey = "Qb3pD-cCK2PYZJzYr";

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Web Wizard",
      message: message,
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <div className="email" id="email-form">
      <h1 className="email-h1">Contact Me</h1>
      <form onSubmit={handleSubmit} className="emailForm">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          cols="30"
          rows="10"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">Send Email</button>
      </form>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default EmailForm;
