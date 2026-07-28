function Contact() {

  return (
    <section className="contact-section">

      <div className="contact-box">

        <h2>
          Contact PULSE AI
        </h2>

        <p>
          Have questions about the AI health platform?
          Connect with the PULSE AI team.
        </p>


        <input
          type="text"
          placeholder="Your Name"
        />


        <input
          type="email"
          placeholder="Your Email"
        />


        <textarea
          placeholder="Your Message"
        ></textarea>


        <button className="btn">
          Send Message
        </button>


      </div>

    </section>
  );
}

export default Contact;
