function Dashboard() {

  const healthData = [
    {
      icon: "❤️",
      title: "Heart Rate",
      value: "72 BPM"
    },
    {
      icon: "🌡️",
      title: "Body Temperature",
      value: "36.7°C"
    },
    {
      icon: "😴",
      title: "Sleep",
      value: "7.5 Hours"
    },
    {
      icon: "🧘",
      title: "Stress Level",
      value: "Low"
    }
  ];

  return (
    <section className="dashboard">

      <h2>
        AI Health Dashboard
      </h2>

      <p className="dashboard-description">
        Monitor your daily health information
        collected through the PULSE AI system.
      </p>


      <div className="dashboard-cards">

        {healthData.map((data, index) => (

          <div className="health-card" key={index}>

            <h3>
              {data.icon} {data.title}
            </h3>

            <p>
              {data.value}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Dashboard;
