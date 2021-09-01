import { ArrowUp } from "../../Icons";

const FaqCard = ({
  active,
  toggleActive,
  heading = "Like contributing?",
  idx,
  dropdown,
}) => {
  return (
    <div
      className="bg-white p-4 w-full md:w-auto rounded-md shadow-xl cursor-pointer"
      onClick={() => toggleActive(idx)}
    >
      <h5 className="flex items-center justify-between text-xl">
        {heading}
        <ArrowUp
          className={`w-6 ${active === idx ? null : "transform rotate-180"}`}
        />
      </h5>
      <div
        className={`text-left text-blackAlt mt-6 leading-loose ${
          active === idx ? "block" : "hidden"
        }`}
      >
        {dropdown}
      </div>
    </div>
  );
};

export default FaqCard;
