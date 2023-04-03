import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Cloud from "../components/Cloud"
import Faq from "../components/Faq"
import Footer from "../components/Footer"
import Blog from "../components/Blog"

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