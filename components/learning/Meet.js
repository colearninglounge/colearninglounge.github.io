import BaseMentor from "../base/BaseMentor";
import { useRef } from "react";
import { ArrowLeft } from "../Icons";

const Meet = () => {
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
    <>
      <div className="mt-32 px-6 md:px-0 text-center container xl:px-12 mx-auto">
        <h2 className="text-secondary font-bold text-3xl md:text-5xl">
          Meet Our Mentors
        </h2>
        <h3 className="text-blackAlt font-normal mt-3 md:w-2/3 mx-auto leading-relaxed">
          Our Mentors are professional and em ipsum dolor sit amet, consectetur
          adipiscing elit. Neque elit eget augue bibendum id blandit tincidunt
          leo sit. Ultrices at nisl libero dignissim. Placerat lobortis
        </h3>
      </div>
      <div className="relative">
        <div
          className="flex items-center gap-2 pl-6 md:pl-0 space-x-8 md:space-x-20 md:space-x-0 mt-8 pt-6 pb-12 overflow-x-scroll no-scrollbar"
          ref={collection}
        >
          {Array(6)
            .fill("")
            .map((_, idx) => (
              <BaseMentor className="md:ml-20" key={idx} />
            ))}
        </div>
        <button
          className="px-4 py-3 bg-arrowBg text-white rounded-full absolute top-1/2 left-6 transform -translate-y-1/2 focus:outline-none focus:ring-1 focus:ring-indigo-600 focus:ring-offset-2 focus:ring-offset-indigo-700 z-50"
          onClick={scrollLeft}
        >
          <ArrowLeft className="w-3" color="#fff" />
        </button>
        <button
          className="px-4 py-3 bg-arrowBg text-white rounded-full absolute top-1/2 right-6 transform -translate-y-1/2 focus:outline-none focus:ring-1 focus:ring-indigo-600 focus:ring-offset-2 focus:ring-offset-indigo-700 z-50"
          onClick={scrollRight}
        >
          <ArrowLeft className="w-3 transform rotate-180" color="#fff" />
        </button>
      </div>
    </>
  );
};

export default Meet;
