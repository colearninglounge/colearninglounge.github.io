import { useState } from "react";
import BaseButton from "../../base/BaseButton";
import BaseDate from "../../base/BaseDate";
import {
  Clock,
  EventAvatar,
  EventLearnMore,
  EventShare,
  EventWorkshop,
} from "../../Icons";

const RecentEventCard = ({
  category = "WORKSHOP",
  time = "09:00 AM",
  imgIdx = "1",
  headline = "Lorem Ipsum dolor sit amet, consectetur adipiscing elit.",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A aliquam interdum parturient lectus massa ridiculus orci risus ut. Aenean aliquet sed...",
  attendees = "200+",
  month = "July",
  date = "09",
}) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="min-w-80 md:ml-12 text-left bg-white rounded-md shadow-xl">
      <div className="rounded-t-md overflow-hidden relative">
        <img src={`/images/ev${imgIdx}.png`} alt="event" />
        <BaseDate
          month={month}
          date={date}
          className="absolute z-50 top-4 left-4"
        />
      </div>
      <div className="py-6 px-4">
        <div className="flex justify-between items-center text-socialHandle">
          <h5 className="flex items-center uppercase text-xs">
            <EventWorkshop className="mr-2" />
            {category}
          </h5>
          <h5 className="flex items-center text-xs">
            <Clock className="mr-2" />
            {time}
          </h5>
        </div>
        <div className="mt-3">
          <h3 className="text-blackAlt text-xl leading-tight font-medium">
            {headline}
          </h3>
          <h4 className="text-blackAlt mt-2 leading-relaxed text-sm">
            {description}
          </h4>
        </div>
        <div className="flex justify-between items-center mt-8">
          <h5 className="flex items-center text-xs font-bold text-socialHandle">
            <EventAvatar className="mr-2" />
            {attendees} Going
          </h5>
          <div className="flex items-center">
            <BaseButton
              text="Attend"
              classes="bg-eventAttend text-white text-xs"
            />

            <div className="relative ml-2">
              <div
                className="flex items-center cursor-pointer"
                onClick={() => {
                  setDropdown(!dropdown);
                }}
              >
                <span className="inline-block mr-1 w-1 h-1 rounded-full bg-socialHandle" />
                <span className="inline-block mr-1 w-1 h-1 rounded-full bg-socialHandle" />
                <span className="inline-block w-1 h-1 rounded-full bg-socialHandle" />
              </div>

              <div
                className={`bg-white rounded-md cursor-default text-socialHandle font-medium w-40 absolute top-4 left-0 py-2 divide-y-2 divide-eventDropdownBorder ${
                  dropdown ? "" : "hidden"
                }`}
              >
                <h5 className="flex items-center justify-between px-3 py-1 cursor-pointer">
                  Learn More
                  <EventLearnMore className="w-5" />
                </h5>
                <h5 className="flex items-center justify-between px-3 py-1 cursor-pointer">
                  Share
                  <EventShare className="w-4" />
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentEventCard;
