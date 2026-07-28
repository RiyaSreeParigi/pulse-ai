import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Pendant from "./components/Pendant";
import Features from "./components/Features";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="app">

      <Navbar />

      <Hero />

      <Pendant />

      <Features />

      <Dashboard />

      <Login />

      <Footer />

    </div>
  );
}

export default App;
