import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Offer from "./components/Offer/Offer";
import Explore from "./components/Explore/Explore";
import Locations from "./components/Locations/Locations";
import Test from "./components/Test/Test";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Offer />
      <Explore />
      <Locations />
      <Test />
    </div>
  );
}

export default App;
