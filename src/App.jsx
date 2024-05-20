import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Offer from "./components/Offer/Offer";
import Explore from "./components/Explore/Explore";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Offer />
      <Explore />
    </div>
  );
}

export default App;
