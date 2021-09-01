import { useState } from "react";
import BaseDate from "../../base/BaseDate";
import { ArrowDown } from "../../Icons";
import BaseButton from "./../../base/BaseButton";

const UpcomingPodcastCard = ({
  podThumb = "/images/podThumb.png",
  name = "SMM starter pack, part 2: content promotions",
  category = "MEDIA",
  time = "90:00 PM IST",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ornare nisl sagittis aenean. Lorem arcu amet aliquam volutpat, turpis sed eget tortor. Sed nec sit diam hendrerit. Vitae metus.",
  hostAvatar = "/images/podHost.png",
  hostName = "Patricia Kemp",
  month = "July",
  date = "09",
  inverted,
}) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="flex flex-col md:flex-row rounded-md text-left bg-white shadow-2xl">
      <div
        className={`relative w-full md:w-64 h-full ${inverted && "md:order-2"}`}
      >
        <img
          src={podThumb}
          alt={name}
          className={`w-full rounded-2xl  md:rounded-tl-md md:rounded-bl-md ${
            inverted && "md:rounded-none md:rounded-tr-md md:rounded-br-md"
          }`}
        />
        <BaseDate
          month={month}
          date={date}
          className="absolute z-50 top-4 left-4"
        />
        <BaseButton
          onClick={() => setDropdown((state) => !state)}
          text={
            <>
              Subscribe now
              <ArrowDown className="w-3 ml-2" />
            </>
          }
          rounded={false}
          up={false}
          center
          classes="bg-primary text-white absolute left-1/2 bottom-4 text-sm transform -translate-x-1/2"
        />
        <div
          className={`bg-white rounded-md cursor-default text-socialHandle font-medium w-40 absolute -bottom-40 md:-bottom-36 left-1/2 transform -translate-x-1/2 md:left-auto md:-translate-x-0 md:-right-1/3 py-2 divide-y-2 divide-eventDropdownBorder shadow-xl ${
            dropdown ? "" : "hidden"
          }`}
        >
          {["Apple", "Spotify", "Stitcher", "Google", "Overcast"].map(
            (platform) => (
              <h5
                key={platform}
                className="flex items-center justify-between px-3 py-1 cursor-pointer"
              >
                {platform}
              </h5>
            )
          )}
        </div>
      </div>
      <div className="px-8 py-6 flex flex-col flex-1 justify-between">
        <div className="flex justify-between items-center text-gray-600">
          <h6>{category}</h6>
          <h6>{time}</h6>
        </div>
        <h4 className="text-3xl font-medium font-manrope sm:my-4 sm:mb-6 lg:my-0 text-blackAlt">
          {name}
        </h4>
        <h5 className="text-gray-800 md:-mt-4">{description}</h5>
        <div className="flex justify-between items-center">
          <div className="flex items-center text-sm sm:mt-4 lg:m-0">
            <img
              src={hostAvatar}
              alt={`${hostName} avatar`}
              className="w-8 rounded-full mr-4"
            />
            <p className="text-primary">
              Hosted by: <span className="font-semibold">{hostName}</span>
            </p>
          </div>
          <div>Social</div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingPodcastCard;
