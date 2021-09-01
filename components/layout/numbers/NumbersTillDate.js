import Hexagon from "../Hexagon";

const NumbersTillDate = () => {
  return (
    <div className="md:w-4/5 mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 items-center justify-center">
      <Hexagon title="40+" description="Happy Clients" />
      <Hexagon title="540+" description="Projects Completed" />
      <Hexagon title="300" description="Dedicated Members" />
      <Hexagon title="25+" description="Awards Won" />
    </div>
  );
};

export default NumbersTillDate;
