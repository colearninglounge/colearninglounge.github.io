import BaseButton from "../../base/BaseButton";
import BaseTag from "./../../base/BaseTag";

const ActiveJobsCard = ({
  company = "Amazon",
  source = "Cutshort",
  position = "Lead Product Design",
  jobDesc = "Our team was inspired by the seven skills of highly effective programmers created by the TechLead. We wanted to provide our own take on the topic...",
  location = "Banglore, Karnataka, India",
  tags = ["Full Time", "Remote", "Verified", "Referred Job"],
}) => {
  return (
    <div className="bg-white rounded-md px-6 py-4 shadow-xl">
      <div className="flex justify-between items-start">
        <img
          src={`/images/${company.toLowerCase()}.png`}
          alt={company}
          className="w-16"
        />
        <img
          src={`/images/${source.toLowerCase()}.png`}
          alt={source}
          className="w-8"
        />
      </div>
      <div className="mt-4 space-y-2 text-left">
        <h5 className="text-black font-bold text-lg">{position}</h5>
        <h6 className="text-blackAlt">{jobDesc}</h6>
      </div>
      <div className="mt-6 text-left">
        <h6 className="text-blackAlt font-semibold text-sm">{location}</h6>
        <div className="flex flex-wrap items-center gap-2 mt-4">
          {tags.map((tag, idx) => (
            <BaseTag key={idx} tag={tag} />
          ))}
        </div>
        <div className="flex justify-end mt-4">
          <BaseButton
            rounded={false}
            text="Apply"
            classes="bg-primary text-white text-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default ActiveJobsCard;
