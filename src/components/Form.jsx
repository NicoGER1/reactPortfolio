import { useState } from "react";
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

  return (
    <section className="contact-component">
      <h2 id="Contact">
        {" "}
        N&apos;hesitez pas à prendre{" "}
        <span className="contactcolor">contact</span> avec moi pour plus
        d&apos;informations.
      </h2>
      <div className="contact-container">
        <form
          className="form-container"
          onSubmit={(event) => event.preventDefault()}
        >
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
            name="firstName"
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
