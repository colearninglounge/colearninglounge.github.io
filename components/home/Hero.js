import React, { useEffect, useRef, useState } from "react";
import BaseButton from "../base/BaseButton";
import Slider from "./Slider";

const Hero = () => {
  const [active, setActive] = useState(1);
  const [text, setText] = useState(["Uplift your", "career with", "Community"]);

  const index = useRef(1);

  useEffect(() => {
    const changeIndex = () => {
      if (index.current < 3) {
        index.current += 1;
        handleSlideChange(index.current);
      } else {
        index.current = 1;
        handleSlideChange(index.current);
      }
    };
    const interval = setInterval(changeIndex, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleSlideChange = (index) => {
    setActive(index);
    if (index === 1) {
      setText(["Uplift your", "career with", "Community"]);
    } else if (index === 2) {
      setText(["Upscale", "yourself with", "Co-Learning Lounge"]);
    } else {
      setText(["Upskill your", "career with", "collaborative learning"]);
    }
  };

  return (
    <div className="bg-gradient-to-r from-heroGradLeft to-heroGradRight md:min-h-screen px-6 md:px-0 text-center md:text-left md:flex md:items-center text-white">
      <div className="container xl:px-12 relative mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 relative mt-24 md:mt-0">
          <img
            src="/images/hero-lt.png"
            alt="decoration"
            className="hidden md:block w-16 md:w-24 absolute -left-12 -top-12 z-0"
          />
          <img
            src="/images/hero-rt.png"
            alt="decoration"
            className="hidden md:block w-16 md:w-24 absolute right-40 top-16 z-0"
          />
          <img
            src="/images/hero-ld.png"
            alt="decoration"
            className="hidden md:block w-16 md:w-24 absolute -left-12 -bottom-12 z-0"
          />
          <img
            src="/images/hero-rd.png"
            alt="decoration"
            className="hidden md:block w-16 md:w-24 absolute right-28 -bottom-12 z-0"
          />
          <h2 className="tracking-widest z-10 relative">
            AWARD WINNING COURSES
          </h2>
          <h1 className="text-3xl md:text-6xl leading-tight font-bold mt-2 z-10 relative">
            {text[0]} <br className="hidden md:block" />
            {text[1]} <br className="hidden md:block" />
            <span className="text-gray-900 italic">{text[2]}</span>
          </h1>
          <BaseButton
            text="Explore"
            classes="bg-pink-600 text-white mt-8 text-xl tracking-wider z-10 relative mx-auto md:mx-0"
          />
        </div>
        <div className="md:w-1/2 relative flex justify-center">
          <img
            src={`/images/hero-${active}.png`}
            alt="hero"
            className="h-64 my-8 md:my-0 md:h-auto md:max-h-140"
          />
          <Slider
            className="hidden md:block"
            active={active}
            handleSlideChange={handleSlideChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
