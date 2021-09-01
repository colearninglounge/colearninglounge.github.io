import BaseButton from "../base/BaseButton";
import TeamCollection from "./team/TeamCollection";

const Team = () => {
  return (
    <div className="mt-20 px-6 py-8 md:px-0 text-center overflow-x-hidden">
      <div className="container xl:px-12 mx-auto">
        <h2 className="text-secondary font-bold text-3xl md:text-5xl">
          Our Team.
        </h2>
        <h3 className="text-blackAlt font-normal mt-3 w-4/5 mx-auto leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h3>
        <TeamCollection />
        <div className="flex justify-center">
          <BaseButton
            text="View Our Team"
            classes="bg-primary text-white mt-20"
          />
        </div>
      </div>
    </div>
  );
};

export default Team;
