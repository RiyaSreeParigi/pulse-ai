function FAQ() {

  const faqs = [
    {
      question: "What is PULSE AI?",
      answer:
        "PULSE AI is a smart health platform designed to work with an intelligent wearable pendant."
    },
    {
      question: "What is a Digital Twin?",
      answer:
        "A Digital Twin is a virtual health profile that learns your normal health patterns over time."
    },
    {
      question: "Can PULSE AI replace a doctor?",
      answer:
        "No. PULSE AI is designed to assist users by providing health information and insights. It is not a replacement for professional medical advice."
    },
    {
      question: "Is my health data secure?",
      answer:
        "PULSE AI is designed with privacy and security as important priorities."
    }
  ];

  return (
    <section className="faq-section">

      <h2>Frequently Asked Questions</h2>

      <div className="faq-container">

        {faqs.map((faq, index) => (

          <div className="faq-card" key={index}>

            <h3>
              ❓ {faq.question}
            </h3>

            <p>
              {faq.answer}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default FAQ;
