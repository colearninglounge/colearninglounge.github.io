import { Brain, Knowledge, Latech, Percom, Upskill } from "../../Icons";
import JoinSingles from "./JoinSingles";

const reasons = [
  {
    headline: "Latest technology",
    description:
      "Bored with the job and looking to hop into the work-related to the latest technology.",
    children: <Latech className="w-20 mx-auto" />,
  },
  {
    headline: "Perfect Community",
    description:
      "Don’t get the perfect community that feels like home and suits your needs?",
    children: <Percom className="w-20 mx-auto" />,
  },
  {
    headline: "Upskill yourself",
    description:
      "With us, you will get a custom-tailored roadmap to upskill yourself.",
    children: <Upskill className="w-20 mx-auto" />,
  },
  {
    headline: "Right support",
    description:
      "With us, you will always get the right amount of support you require.",
    children: <Knowledge className="w-20 mx-auto" />,
  },
  {
    headline: "Job referrals",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique.",
    children: <Brain className="w-20 mx-auto" />,
  },
  {
    headline: "Constant collaboration",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique.",
    children: <Upskill className="w-20 mx-auto" />,
  },
];

const JoinReasons = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-x-6 gap-y-16 container xl:px-12 mx-auto mt-8">
      {reasons.map(({ headline, description, children }, idx) => (
        <JoinSingles key={idx} headline={headline} description={description}>
          {children}
        </JoinSingles>
      ))}
    </div>
  );
};

export default JoinReasons;
