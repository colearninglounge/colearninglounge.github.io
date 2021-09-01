import BaseButton from "../../base/BaseButton";

const EventCard = ({ icon, headline, description }) => {
  return (
    <div className="bg-white px-8 py-4 hover:shadow-2xl transition-all duration-300 text-left">
      {icon}
      <h4 className="text-blackAlt text-xl text-center font-bold mt-4">
        {headline}
      </h4>
      <h5 className="text-blackAlt text-base leading-relaxed mt-2">
        {description}
      </h5>
      <div className="mt-6 flex justify-between">
        <BaseButton
          classes="text-xs text-white bg-eventSecondary mx-auto"
          text="Learn More"
        />
      </div>
    </div>
  );
};

export default EventCard;
