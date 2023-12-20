import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const About = () => {
  return (

    <><Navbar />
      <Helmet>
        <title>About Us | Nourish Net</title>
      </Helmet>
      <div className="bg-gray-100 p-8">
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold text-center mb-6">About NourishNet</h1>
      <p className="text-lg text-gray-700 text-justify">
        At NourishNet, we are dedicated to making a positive impact on people's
        lives by addressing food insecurity and reducing food waste. Our mission
        is to create a world where no one goes to bed hungry.
      </p>
      <div className="mt-8 flex flex-wrap items-center">
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p className="text-gray-700 mt-2">
            Our mission is to bridge the gap between food surplus and food
            scarcity. We aim to collect surplus food from various sources and
            distribute it to those who need it the most, ensuring that no edible
            food goes to waste.
          </p>
          <p className="text-gray-700 mt-2">
            We are committed to fighting hunger, promoting nutrition, and raising
            awareness about the importance of responsible food consumption.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src="/Images/mission.jpeg"
            alt="Mission Image"
            className="mx-auto h-128 w-64"
          />
        </div>
      </div>
      <div className="mt-8 flex flex-wrap items-center">
        <div className="w-full md:w-1/2">
          <img src="/Images/vision.jpg" alt="Vision Image" className="mx-auto h-120 w-64" />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold">Our Vision</h2>
          <p className="text-gray-700 mt-2">
            NourishNet shared a common vision of making nutritious food accessible to
            everyone. Our journey started with a small team and a big dream to
            combat hunger and malnutrition.
          </p>
          <p className="text-gray-700 mt-2">
            Over the years, we have expanded our network and partnered with local
            communities, businesses, and volunteers. Together, we have been able
            to provide food to thousands of people in need.
          </p>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Our Impact</h2>
        <p className="text-gray-700 mt-2">
          NourishNet has made a significant impact in the communities we serve. We
          have provided meals to countless individuals and families, supported
          food education programs, and contributed to reducing food waste.
        </p>
        <p className="text-gray-700 mt-2">
          Our work is only possible because of the generosity and dedication of
          our donors, volunteers, and partners.
        </p>
      </div>
    </div>
  </div>
   
    <div className="aboutus flex h-60v p-12 m-10 items-center justify-between">
        <div className="info-text w-1/2 h-55v flex flex-col">
          <h1 className="info-heading text-black text-3xl pt-5 mb-5">Nourish Net</h1>
          <p className="info-subheading text-1.5xl">

            <br /><br />
            All efforts are concerted towards providing better food to more people.
            Through our targeted interventions for child and maternal malnutrition,
            we are working towards bringing large-scale systemic transformation in the nutrition landscape of India.
          </p>
        </div>
        <img
          src="/Images/work.jpg"
          alt="Image Alt Text"
          className="info-img h-80 w-100" />

      </div><Footer/></>
  );
};

export default About;
