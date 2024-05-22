import "../styles/Form.css";

function Form() {
  return (
    <section className="contact-component">
      <h2 id="Contact">
        {" "}
        N&apos;hesitez pas à prendre{" "}
        <span className="contactcolor">contact</span> avec moi pour plus
        d'informations.
      </h2>
      <div className="contact-container">
        <form className="form">
          <input
            name="name"
            type="text"
            className="feedback-input"
            placeholder="Nom"
            id="name"
          />

          <input
            name="email"
            type="text"
            className="feedback-input"
            id="email"
            placeholder="Email"
          />

          <textarea
            name="text"
            className="feedback-input"
            id="comment"
            placeholder="Commentaire"
          ></textarea>

          <input type="submit" value="✉️ Envoyer" id="send-button" />
        </form>
      </div>
    </section>
  );
}

export default Form;
