function HealthReports() {

  const reports = [
    {
      title: "Daily Health Summary",
      description:
        "Overview of heart rate, temperature, sleep, and activity patterns."
    },
    {
      title: "Weekly AI Analysis",
      description:
        "AI-generated insights based on your health trends over seven days."
    },
    {
      title: "Health Pattern Report",
      description:
        "Shows changes and unusual patterns detected over time."
    }
  ];


  return (
    <section className="reports-section">

      <div className="reports-content">

        <h2>
          Health Reports
        </h2>

        <p>
          View personalised health reports generated
          from your PULSE AI data.
        </p>


        <div className="reports-cards">

          {reports.map((report, index) => (

            <div className="report-card" key={index}>

              <h3>
                📄 {report.title}
              </h3>

              <p>
                {report.description}
              </p>

              <button className="btn">
                View Report
              </button>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default HealthReports;
