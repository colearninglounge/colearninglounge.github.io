import { ProjectDevice } from "../Icons";
import BaseButton from "./../base/BaseButton";

const AchievementCard = ({
  gradientLeft,
  gradientRight,
  category = "COMMERCIAL ASSISTANTS",
  time = "17 days ago",
  headline = "Lorem Ipsum dolor sit amet, consectetur adipiscing elit.",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A aliquam interdum parturient lectus massa ridiculus orci risus ut. Aenean aliquet sed...",
}) => {
  return (
    <div className="min-w-80 md:space-y-0 md:ml-12 text-left bg-white rounded-md overflow-hidden">
      <div
        className={`flex justify-center items-center py-8 bg-gradient-to-br ${
          gradientLeft && gradientRight
            ? `${gradientLeft} ${gradientRight}`
            : "from-projectRedGradLeft to-projectRedGradRight"
        }`}
      >
        <ProjectDevice />
      </div>
      <div className="py-6 px-4">
        <div className="flex justify-between items-center text-socialHandle">
          <h5 className="uppercase text-xs">{category}</h5>
          <h5 className="text-xs">{time}</h5>
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
          <div className="flex items-center -space-x-3">
            <img
              src="/images/projectAvatar1.png"
              className="w-8 border-2 border-white rounded-full"
              alt="avatar"
            />
            <img
              src="/images/projectAvatar2.png"
              className="w-8 border-2 border-white rounded-full"
              alt="avatar"
            />
            <img
              src="/images/projectAvatar3.png"
              className="w-8 border-2 border-white rounded-full"
              alt="avatar"
            />
            <span
              className="w-8 h-8 border-2 border-white bg-gray-300 font-medium text-gray-500 text-xs flex items-center justify-center rounded-full"
              alt="avatar"
            >
              +3
            </span>
          </div>
          <BaseButton
            text="Learn More ➡"
            classes="bg-socialBg text-primary text-xs"
          />
        </div>
      </div>
    </div>
  );
};

export default AchievementCard;
