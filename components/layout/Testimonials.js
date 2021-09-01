import Image from "next/image";
import { useRef } from "react";
import { ArrowLeft } from "../Icons";
import TestimonialCollection from "./testimonial/TestimonialCollection";

const Testimonials = () => {
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
    <div className="mt-32 text-center overflow-hidden relative">
      <Image
        className="object-cover fixed z-0"
        alt="testimonial background"
        src="/images/testBack.png"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="container px-6 md:px-0 xl:px-12 mx-auto relative z-50">
        <h2 className="text-secondary font-bold text-3xl md:text-5xl">
          Testimonials
        </h2>
        <h3 className="text-blackAlt font-normal mt-3 w-4/5 mx-auto leading-relaxed">
          Don’t just take our words. Hear the journey of our developers with us.
          And embraks, on yours!
        </h3>
      </div>
      <div className="relative z-50">
        <div
          className="overflow-x-scroll no-scrollbar relative pl-6 md:pl-0"
          ref={collection}
        >
          <TestimonialCollection />
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
    </div>
  );
};

export default Testimonials;
