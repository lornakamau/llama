import React from "react";
import Banner from "../components/Banner";
import Carousel from "../components/Carousel";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Banner />
      <Navbar></Navbar>
      <Carousel></Carousel>
    </div>
  );
};

export default Home;
