import React, { useState, useEffect } from 'react';

import { SliderData } from './SliderData';

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import '../../assets/css/slider.css';

const Slider = () => {

  const [currBanner, setCurrBanner] = useState(0);

  const bannerLength = SliderData.length;
  const autoScroll = true;
  let slideInterval;
  let intervalTime = 10000;

  const arrowRight = () => {
      setCurrBanner(currBanner === bannerLength-1 ? 0 : currBanner + 1);
  }

  const arrowLeft = () => {
      setCurrBanner(currBanner === 0 ? bannerLength - 1 : currBanner - 1);
  }

  const auto = () => {
    slideInterval = setInterval(arrowRight, intervalTime);
  }

  useEffect(() => {
    setCurrBanner(0);
  }, []);

  useEffect(() => {
    if (autoScroll === true)
      auto();
    return () => clearInterval(slideInterval);
  }, [currBanner]);

  return (
    <div className="slider-container">
      <AiOutlineArrowLeft className="arrow arrow-left" onClick={arrowLeft} />
      <AiOutlineArrowRight className="arrow arrow-right" onClick={arrowRight} />

      {SliderData.map((banner, index) => {
        return (
          <div className={index === currBanner ? "slide current" : "slide"} key={index}>
            {index === currBanner && (
              <img src={banner.image} alt="slide" />
            )}
          </div>
        )
      })};

    </div>
  )
}

export default Slider;