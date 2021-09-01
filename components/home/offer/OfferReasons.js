import { Collaboration, Community, Project } from "../../Icons";
import OfferSingles from "./OfferSingles";
import BaseButton from "./../../base/BaseButton";

const OfferReasons = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 lg:grid-cols-3 gap-x-6 container xl:px-12 mx-auto mt-16 mb-12">
        <OfferSingles
          headline="Project Based Learning"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum."
        >
          <Project className="w-12 mx-auto" />
        </OfferSingles>
        <OfferSingles
          headline="Collaborative Learning"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum."
        >
          <Collaboration className="w-12 mx-auto" />
        </OfferSingles>
        <OfferSingles
          headline="Community Learning"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum."
        >
          <Community className="w-12 mx-auto" />
        </OfferSingles>
      </div>

      <div className="flex justify-center">
        <BaseButton text="Explore more" classes="bg-primary text-white" />
      </div>
    </div>
  );
};

export default OfferReasons;
