import "./App.css";

function App() {
  return (
    <div className="app">

      <nav className="navbar">
        <h1>PULSE AI</h1>

        <ul>
          <li>Home</li>
          <li>Features</li>
          <li>Dashboard</li>
          <li>Contact</li>
        </ul>
      </nav>

      <section className="hero">
        <h2>Welcome to PULSE AI</h2>

        <p>
          Your intelligent health companion powered by AI.
        </p>

        <button>Get Started</button>
      </section>

      <section className="features">

        <div className="card">
          <h3>❤️ Heart Monitoring</h3>
          <p>Track your heart health in real time.</p>
        </div>

        <div className="card">
          <h3>🧠 AI Analysis</h3>
          <p>Receive AI-powered health insights.</p>
        </div>

        <div className="card">
          <h3>📊 Dashboard</h3>
          <p>View your health statistics and trends.</p>
        </div>

      </section>

    </div>
  );
}

export default App;
