import React from "react";
import Hero from "../components/Hero";
import Cloud from "../components/Cloud"
import Footer from "../components/Footer"
import Faq from "../components/Faq"

function Home() {
  return (
    <div className="App">
      <Hero/>
      <Cloud/>
      <Faq/>
      <Footer/>
    </div>
  );
}
export default Home;