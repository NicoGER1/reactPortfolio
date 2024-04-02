import React from "react";

const Form = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h3>
        N&apos;hesitez pas à prendre contact avec moi pour de nouveau projets
        ambitieux
      </h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Votre nom</label>
        <input
          type="text"
          name="name"
          onChange={handleInputChange}
          value={formData.name}
        />
        <label htmlFor="email">Votre email</label>
        <input
          type="email"
          name="email"
          onChange={handleInputChange}
          value={formData.email}
        />
        <label htmlFor="message">Votre message</label>
        <textarea
          name="message"
          id=""
          cols="30"
          rows="10"
          onChange={handleInputChange}
          value={formData.message}
        ></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </>
  );
};

export default Form;
