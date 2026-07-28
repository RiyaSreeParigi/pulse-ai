function Features() {
  const features = [
    {
      icon: "❤️",
      title: "Heart Monitoring",
      description:
        "Track heart-related signals and monitor important health patterns."
    },
    {
      icon: "🧠",
      title: "AI Health Analysis",
      description:
        "Artificial intelligence studies your health data and provides insights."
    },
    {
      icon: "📊",
      title: "Health Dashboard",
      description:
        "View your health information through organised charts and reports."
    },
    {
      icon: "🔔",
      title: "Smart Alerts",
      description:
        "Receive notifications when unusual health patterns are detected."
    }
  ];

  return (
    <section className="features">

      {features.map((feature, index) => (
        <div className="card" key={index}>

          <h3>
            {feature.icon} {feature.title}
          </h3>

          <p>
            {feature.description}
          </p>

        </div>
      ))}

    </section>
  );
}

export default Features;
