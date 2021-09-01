import BaseChecklist from "../base/BaseChecklist";

const Help = () => {
  return (
    <div className="mt-32 px-6 md:px-0 text-center container xl:px-12 mx-auto">
      <h2 className="text-secondary font-bold text-3xl md:text-5xl">
        How will a mentor help you?
      </h2>
      <h3 className="text-blackAlt font-normal mt-3">
        Our Mentors are professional and em ipsum dolor sit amet, consectetur
        adipiscing elit.
      </h3>
      <div className="container xl:px-12 mx-auto mt-24 flex justify-center space-x-32 items-center">
        <div className="space-y-8">
          <BaseChecklist
            heading="Technical guidance"
            list={[
              "Reviews of projects and exercises",
              "Challenging your approach",
              "Help with execution",
            ]}
          />
          <BaseChecklist
            heading="Career advice"
            list={["Industry insights", "Interview tips", "Job search advice"]}
          />
          <BaseChecklist
            heading="Accountability"
            list={["Setting learning goals", "Tracking progress weekly"]}
          />
        </div>
        <img
          src="/images/mentor-help.png"
          alt="mentor help"
          className="hidden md:block max-h-140"
        />
      </div>
    </div>
  );
};

export default Help;
