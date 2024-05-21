import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Offer from "./components/Offer/Offer";
import Explore from "./components/Explore/Explore";
import Test from "./components/Test/Test";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Offer />
      <Explore />
      <Test />
    </div>
  );
}

export default App;
