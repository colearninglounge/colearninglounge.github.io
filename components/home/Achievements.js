import { useRef } from "react";
import BaseButton from "../base/BaseButton";
import { ArrowLeft } from "../Icons";
import AchievementCollection from "./../achievements/AchievementCollection";

const Achievements = () => {
  const collection = useRef(null);
  const sideScroll = (element, direction, speed, distance, step) => {
    let scrollAmount = 0;
    var slideTimer = setInterval(function () {
      if (direction == "left") {
        element.scrollLeft -= step;
      } else {
        element.scrollLeft += step;
      }
      scrollAmount += step;
      if (scrollAmount >= distance) {
        window.clearInterval(slideTimer);
      }
    }, speed);
  };
  const scrollRight = () => {
    sideScroll(collection.current, "right", 10, window.innerWidth, 10);
  };
  const scrollLeft = () => {
    sideScroll(collection.current, "left", 10, window.innerWidth, 10);
  };

  return (
    <div className="py-24 bg-gradient-to-tr from-heroGradLeft to-heroGradRight text-center">
      <div className="container px-6 md:px-0 xl:px-12 mx-auto">
        <h2 className="text-white font-bold text-3xl md:text-5xl">
          Projects achievement so far.
        </h2>
        <h3 className="text-white font-normal mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h3>
      </div>
      <div className="relative">
        <AchievementCollection scrollRef={collection} />
        <button
          className="px-4 py-3 bg-arrowBg text-white rounded-full absolute top-1/2 left-6 transform -translate-y-1/2 focus:outline-none focus:ring-1 focus:ring-indigo-600 focus:ring-offset-2 focus:ring-offset-indigo-700"
          onClick={scrollLeft}
        >
          <ArrowLeft className="w-3" color="#fff" />
        </button>
        <button
          className="px-4 py-3 bg-arrowBg text-white rounded-full absolute top-1/2 right-6 transform -translate-y-1/2 focus:outline-none focus:ring-1 focus:ring-indigo-600 focus:ring-offset-2 focus:ring-offset-indigo-700"
          onClick={scrollRight}
        >
          <ArrowLeft className="w-3 transform rotate-180" color="#fff" />
        </button>
      </div>
      <div className="flex justify-center">
        <BaseButton
          text="View more Projects"
          classes="bg-white text-primary mt-16"
        />
      </div>
    </div>
  );
};

export default Achievements;
