import { DotPattern } from "../../Icons";
import FeaturedCard from "./FeaturedCard";

const FeaturedPodcastCollection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-4 gap-x-6 gap-y-4 container xl:px-12 mx-auto mt-20">
      <div className="col-span-1 md:row-span-2 text-2xl md:text-3xl font-extralight leading-loose text-center md:text-left text-blackAlt relative">
        <DotPattern className="absolute top-8 -left-6 w-64 z-0 hidden md:block" />
        <h3 className="z-10">
          <span className="text-primary font-bold text-6xl font-manrope absolute -top-6 -left-6">
            “
          </span>
          We host some of the Smartest minds in the Business.
        </h3>
      </div>
      {Array(6)
        .fill("")
        .map((_, idx) => (
          <FeaturedCard
            key={idx}
            avatar="/images/featured-avatar.png"
            name="Brandon George"
            position="Business Author and bestselling author of free to Focus"
          />
        ))}
    </div>
  );
};

export default FeaturedPodcastCollection;
