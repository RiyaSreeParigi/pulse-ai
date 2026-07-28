function AIAssistant() {

  return (
    <section className="ai-section">

      <div className="ai-box">

        <h2>
          PULSE AI Assistant
        </h2>

        <p>
          Your intelligent health companion that helps
          explain health data, identify patterns, and
          provide personalised insights.
        </p>

        <div className="chat-box">

          <div className="message ai-message">
            Hello! I am your PULSE AI health assistant.
            How can I help you understand your health data?
          </div>

          <input
            type="text"
            placeholder="Ask your health question..."
          />

          <button className="btn">
            Send
          </button>

        </div>

      </div>

    </section>
  );
}

export default AIAssistant;
