import React from "react";
import { useEffect } from "react";
import "./index.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/hero";
import Footer from "./components/footer/Footer";
import Intro from "./components/intro/Intro";
import Guide from "./components/Guidelines/Guide";
import Criteria from "./components/Criteria/Criteria";
import Faq from "./components/FAQ/Faq";
import Timeline from "./components/timeline/Timeline";
import Privacy from "./components/privacy/Privacy";
import Partners from "./components/partners/Partners";
import Prizes from "./components/prizes/Prizes";

const App = () => {
  useEffect(() => {
    document.title = "Getlinked";
  }, []);
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <Intro />
      <Guide />
      <Criteria />
      <Faq />
      <Timeline />
      <Prizes />
      <Partners />
      <Privacy />
      <Footer />
    </React.Fragment>
  );
};
export default App;
