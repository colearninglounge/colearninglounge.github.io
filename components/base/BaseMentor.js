import { Quote } from "../Icons";
import BaseButton from "./BaseButton";

const BaseMentor = ({ className }) => {
  return (
    <div
      className={`px-6 py-4 rounded-md shadow-2xl min-w-80 md:min-w-3xl md:max-w-3xl ${className}`}
    >
      <div className="flex flex-col md:flex-row items-center">
        <div className="px-6 w-full md:w-1/3 text-center">
          <img
            src="/images/mentor-avatar.png"
            alt="mentor-avatar"
            className="w-56 rounded-full"
          />
          <h4 className="font-bold text-blackAlt text-xl mt-4">
            Tatiana Saris
          </h4>
          <h4 className="text-blackAlt">UI / UX Designer</h4>
        </div>
        <div className="text-left relative w-11/12">
          <Quote className="w-12 absolute -left-2 top-0 opacity-40" />
          <h5 className="text-gray-800 italic mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h5>
          <h6 className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque elit
            eget augue bibendum id blandit tincidunt leo sit. Ultrices at nisl
            libero dignissim. Placerat lobortis a tincidunt metus sagittis,
            risus. Ipsum ultricies suspendisse lectus sodales velit. Libero, a
            pellentesque nisl dolor dolor eu pulvinar sodales. Cras orci viverra
            vitae non tempor massa porttitor malesuada pharetra. Mauris, egestas
            faucibus justo, integer aliquam egestas nisi, sagittis. Dictum id
            sed vulputate leo. A id justo.
          </h6>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-y-4 gap-x-6 mt-12">
        {[
          "1-on-1 Mentorship",
          "Consultation",
          "Front-end Development",
          "UI/UX",
        ].map((service, idx) => (
          <BaseButton
            classes="bg-primary text-white"
            center
            rounded={false}
            key={idx}
            text={service}
          />
        ))}
      </div>
    </div>
  );
};

export default BaseMentor;
