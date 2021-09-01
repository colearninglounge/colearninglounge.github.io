import JoinReasons from "./join/JoinReasons";

const Join = () => {
  return (
    <div className="mt-12 text-center container px-6 md:px-0 xl:px-12 mx-auto">
      <h2 className="text-secondary font-bold text-3xl md:text-5xl">
        Why you should join us?
      </h2>
      <h3 className="text-blackAlt font-normal mt-3">
        We provide industry best kind of learning in this section.
      </h3>
      <JoinReasons />
    </div>
  );
};

export default Join;
