import React from 'react'
import ImageSlider from '../components/Imageslider'
import { Helmet } from "react-helmet";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HomeCard from '../components/HomeCard';

const Home = () => {
  return (
    <><Helmet>
      <title>Welcome to Nourish Net</title>
    </Helmet>
    <Navbar/>
    <div>
        <ImageSlider />
        <HomeCard/>
      </div>
      <Footer/></>
  )
}

export default Home