import React from "react";
import Hero from "../components/Hero";
import WhyUs from "../components/WhyUs";
import ForEmployers from "../components/ForEmployers";
import Pricing from "../components/Pricing";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <WhyUs />
      <div
        className="relative h-96 bg-cover bg-center"
        style={{
          backgroundImage: "url('/path/to/your/background-image.jpg')",
        }}>
        <img
          src="src/assets/images/homepageImg.jpg"
          alt="Description"
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
      </div>
      <ForEmployers />
      <Pricing />
    </div>
  );
};

export default HomePage;
