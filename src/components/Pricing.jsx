function Pricing() {

  const plans = [
    {
      name: "Basic",
      price: "Free",
      features: [
        "Health Dashboard",
        "Basic AI Analysis",
        "Daily Reports"
      ]
    },
    {
      name: "Pro",
      price: "₹499/month",
      features: [
        "Everything in Basic",
        "Digital Twin",
        "Advanced AI Insights",
        "Unlimited Reports"
      ]
    },
    {
      name: "Enterprise",
      price: "Contact Us",
      features: [
        "Hospital Integration",
        "Research Dashboard",
        "Custom AI Models",
        "Priority Support"
      ]
    }
  ];

  return (
    <section className="pricing-section">

      <h2>Choose Your Plan</h2>

      <p>
        Flexible plans for individuals,
        families and healthcare organisations.
      </p>

      <div className="pricing-cards">

        {plans.map((plan, index) => (

          <div className="pricing-card" key={index}>

            <h3>{plan.name}</h3>

            <h1>{plan.price}</h1>

            <ul>

              {plan.features.map((feature, i) => (

                <li key={i}>
                  ✅ {feature}
                </li>

              ))}

            </ul>

            <button className="btn">
              Choose Plan
            </button>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Pricing;
