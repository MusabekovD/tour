import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Offer from "./components/Offer/Offer";
import Explore from "./components/Explore/Explore";
import Test from "./components/Test/Test";
import Discover from "./components/Discover/Discover";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";

import i18n from "./i18n";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Offer />
      <Explore />
      <Test />
      <Discover />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
