import React from "react";
import Footer from "./Footer";
import Landing from "./Landing";
import Products from "./Products";
import Section from "./Section";

const Home = () => {
  return (
    <div>
      <Landing />
      <Products />
      <Section />
      <Footer />
    </div>
  );
};

export default Home;
