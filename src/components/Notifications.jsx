function Notifications() {

  const alerts = [
    {
      icon: "❤️",
      title: "Heart Rate Alert",
      message:
        "PULSE AI can notify users when heart patterns change from their normal range."
    },
    {
      icon: "🌡️",
      title: "Health Signal Alert",
      message:
        "Unusual health measurements can be highlighted for attention."
    },
    {
      icon: "🤖",
      title: "AI Insight",
      message:
        "AI can provide explanations about detected changes in health trends."
    }
  ];


  return (
    <section className="notifications-section">

      <div className="notifications-content">

        <h2>
          Smart Health Notifications
        </h2>

        <p>
          PULSE AI keeps users informed by analysing
          health patterns and providing intelligent alerts.
        </p>


        <div className="notification-cards">

          {alerts.map((alert, index) => (

            <div className="notification-card" key={index}>

              <h3>
                {alert.icon} {alert.title}
              </h3>

              <p>
                {alert.message}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Notifications;
