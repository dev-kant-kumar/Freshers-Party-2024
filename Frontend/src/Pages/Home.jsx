import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Home/Hero";
import Footer from "../Components/Footer";
import AboutEvent from "../Components/AboutEvent";
import EventDetails from "../Components/EventDetails";
import Gallery from "../Components/Gallery";
import Organizers from "../Components/Organizers";
import FAQs from "../Components/FAQs";
import Contact from "../Components/Contact";

function Home() {
  return (
    <div className="home-page-wrapper">
      <Header />
      <Hero />
      <AboutEvent />
      <EventDetails />
      <Gallery />
      <Organizers />
      <div className="faqs-wrapper">
        <section className="faqs-header">
          <p>Frequently asked questions</p>
          <p className="sub-title">Everything you need to know about the freshers party.</p>
        </section>

        <section className="faqs-main">
          <FAQs />
        </section>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
