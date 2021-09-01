import React from "react";
import BaseButton from "../base/BaseButton";
import EventCollection from "./events/EventCollection";

const Events = () => {
  return (
    <div className="mt-20 text-center overflow-x-hidden">
      <div className="container px-6 md:px-0 xl:px-12 mx-auto">
        <h2 className="text-secondary font-bold text-3xl md:text-5xl">
          Events
        </h2>
        <EventCollection />
        <div className="flex justify-center">
          <BaseButton
            text="View more Events"
            classes="bg-eventMain text-white mt-20"
          />
        </div>
        <h4 className="text-sm text-blackAlt mt-4">
          *Networking will be at the end of each session.
        </h4>
      </div>
    </div>
  );
};

export default Events;
