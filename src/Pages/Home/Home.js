import React from "react";
import Banner from "./Banner";
import InfoCards from "./InfoCards";
import Services from "./Services";
import MakeAppointment from "./MakeAppointment";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <MakeAppointment></MakeAppointment>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
