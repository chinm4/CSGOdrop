import React, { Fragment } from 'react';

import Navbar from '../components/layout/Navbar';
import Slider from '../components/bannerslider/Slider';
import Footer from '../components/layout/Footer';

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Slider />
      <Footer />
    </Fragment>
  );
}

export default Home;