import { Collaborate, Community, Create, Project } from "../../Icons";
import LearningCard from "./LearningCard";

const LearningCollection = () => {
  return (
    <div className="grid w-3/5 mx-auto md:w-full grid-cols-1 items-start lg:space-y-0 md:grid-cols-2 lg:grid-cols-5 mt-16 gap-4">
      <LearningCard
        icon={<Project className="w-6" />}
        headline="Learn"
        description="Learn from the well designed courses."
      />
      <LearningCard
        icon={<Community className="w-6" />}
        headline="Practice"
        description="Practice with the sample questions given."
      />
      <LearningCard
        icon={<Create className="w-6" />}
        headline="Create"
        description="Greate your basics strong with the courses."
      />
      <LearningCard
        icon={<Collaborate className="w-6" />}
        headline="Collaborate"
        description="Collaborate with the top companies we partnered with."
      />
      <LearningCard
        icon={<Community className="w-6" />}
        headline="Contribute"
        description="Contribute to the open source projects."
      />
    </div>
  );
};

export default LearningCollection;
