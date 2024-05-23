import { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Form.css";

const Form = () => {
  const [contactForm, setContactForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChangeForm = (event) => {
    const { name, value } = event.target;
    setContactForm({ ...contactForm, [name]: value });
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_APP_SERVICE_ID,
        import.meta.env.VITE_APP_TEMPLATE_ID,
        form.current,
        { publicKey: import.meta.env.VITE_APP_PUBLIC_KEY }
      )
      .then(
        (result) => {
          alert("Message envoyé.");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact-component">
      <h2 id="Contact">
        {" "}
        N&apos;hesitez pas à prendre{" "}
        <span className="contactcolor">contact</span> avec moi pour plus
        d&apos;informations.
      </h2>
      <div className="contact-container">
        <form className="form-container" ref={form} onSubmit={sendEmail}>
          <input
            className="feedback-input"
            required
            placeholder="Name"
            name="lastName"
            value={contactForm.lastName}
            onChange={(e) => handleChangeForm(e)}
          />

          <input
            className="feedback-input"
            required
            placeholder="Firstname"
            name="firstname"
            value={contactForm.firstName}
            onChange={(e) => handleChangeForm(e)}
          />

          <input
            className="feedback-input"
            required
            placeholder="Mail"
            name="email"
            value={contactForm.email}
            onChange={(e) => handleChangeForm(e)}
          />

          <textarea
            required
            className="feedback-input"
            placeholder="Your message"
            name="message"
            id="comment"
            cols="3"
            rows="10"
            value={contactForm.message}
            onChange={(e) => handleChangeForm(e)}
          />

          <input type="submit" value="✉️ Envoyer" id="send-button" />
        </form>
      </div>
    </section>
  );
};

export default Form;
