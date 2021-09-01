import BaseButton from "../base/BaseButton";
import Hexagon from "../layout/Hexagon";
import NumbersTillDate from "../layout/numbers/NumbersTillDate";

const Community = () => {
  return (
    <div className="mt-32 px-6 md:px-0 text-center container xl:px-12 mx-auto">
      <h2 className="text-secondary font-bold text-3xl md:text-5xl">
        Community Presence
      </h2>
      <h3 className="text-blackAlt font-normal mt-3 w-4/5 mx-auto leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus non quam
        dictumst porttitor fermentum, tortor aliquet mauris fermentum. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit.
      </h3>
      <img
        className="md:w-4/5 mx-auto mt-10"
        src="/images/community.png"
        alt="community"
      />
      <NumbersTillDate />

      <div className="flex flex-col justify-center items-center space-y-6 md:space-y-0 md:flex-row mt-8">
        <BaseButton
          text="Join Our Community"
          classes="text-white bg-primary shadow-xl md:mr-8"
        />
        <BaseButton
          text="Visit Our Github"
          classes="text-white bg-primary shadow-xl"
        />
      </div>
    </div>
  );
};

export default Community;
