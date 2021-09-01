import BaseButton from "../base/BaseButton";
import ActiveJobsCollection from "./active/ActiveJobsCollection";

const Active = () => {
  return (
    <div className="mt-24 px-6 md:px-0 text-center container xl:px-12 mx-auto">
      <h2 className="text-secondary font-bold text-3xl md:text-5xl">
        Active Jobs
      </h2>
      <h3 className="text-blackAlt font-normal mt-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
        vitae.
      </h3>
      <ActiveJobsCollection />
      <div className="mt-12 flex justify-center items-center">
        <BaseButton
          rounded={false}
          text="Explore More"
          classes="bg-primary text-white"
        />
      </div>
    </div>
  );
};

export default Active;
