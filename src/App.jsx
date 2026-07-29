import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Pendant from "./components/Pendant";
import DigitalTwin from "./components/DigitalTwin";
import Features from "./components/Features";
import Dashboard from "./components/Dashboard";
import HealthReports from "./components/HealthReports";
import Notifications from "./components/Notifications";
import AIAssistant from "./components/AIAssistant";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="app">

      <Navbar />

      <Hero />

      <About />

      <Pendant />

      <DigitalTwin />

      <Features />

      <Dashboard />

      <HealthReports />

      <Notifications />

      <AIAssistant />

      <Profile />

      <Login />

      <Contact />

      <Footer />

    </div>
  );
}

export default App;
