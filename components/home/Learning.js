import React from "react";
import LearningCollection from "./learning/LearningCollection";

const Learning = () => {
  return (
    <div className="mt-20 px-6 md:px-0 text-center container xl:px-12 mx-auto">
      <h2 className="text-secondary font-bold text-3xl md:text-5xl">
        Stages of Learning.
      </h2>
      <LearningCollection />
    </div>
  );
};

export default Learning;
