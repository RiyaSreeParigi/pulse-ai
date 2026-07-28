import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pendant from "./components/Pendant";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="app">

      <Navbar />

      <Hero />

      <Pendant />

      <Features />

      <Footer />

    </div>
  );
}

export default App;
