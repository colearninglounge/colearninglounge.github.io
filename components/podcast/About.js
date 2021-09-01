import NumbersTillDate from "../layout/numbers/NumbersTillDate";
import FeaturedCard from "./featured/FeaturedCard";

const About = () => {
  return (
    <div className="mt-24 px-6 md:px-0 text-center container xl:px-12 mx-auto">
      <h2 className="text-secondary font-bold text-3xl md:text-5xl">
        About Podcast
      </h2>
      <div className="grid md:grid-cols-2 container xl:px-12 mx-auto mt-20">
        <h3 className="text-2xl md:text-3xl font-extralight leading-loose text-center md:text-left text-blackAlt relative">
          <span className="text-primary font-bold text-6xl font-manrope absolute -top-6 -left-6">
            “
          </span>
          We host some of the Smartest minds in the Business.
        </h3>
        <div className="text-left mt-6 md:mt-0 space-y-4 flex flex-col items-center md:items-end">
          <h4 className="uppercase font-bold text-gray-500 tracking-widest inline-block">
            SPEAKER OF THE MONTH
          </h4>
          <FeaturedCard
            className="md:w-5/6"
            avatar="/images/featured-avatar.png"
            name="Brandon George"
            position="Business Author and bestselling author of free to Focus"
          />
        </div>
      </div>
      <p className="font-extralight leading-loose text-left mt-12 text-gray-700 container xl:px-12 mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
        pulvinar nibh non est hac suspendisse in. Eget amet dictum faucibus nisl
        justo, nisi, urna. Et venenatis rhoncus vestibulum fermentum fermentum,
        a lorem. Lacus et est erat feugiat tincidunt. Auctor velit odio
        malesuada viverra fames risus mauris habitasse feugiat. Sed pretium ac
        tincidunt sed. Dui sit non amet.
      </p>
      <NumbersTillDate />
    </div>
  );
};

export default About;
