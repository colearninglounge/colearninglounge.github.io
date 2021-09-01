import TeamCircle from "./TeamCircle";

const TeamCollection = () => {
  return (
    <div className="mt-12 space-y-8">
      <div className="flex flex-wrap justify-center items-center space-x-4">
        {Array(8)
          .fill("")
          .map((_, idx) => (
            <TeamCircle key={idx} imgUrl="/images/team1.png" />
          ))}
      </div>
      <div className="flex flex-wrap justify-center items-center space-x-4">
        {Array(7)
          .fill("")
          .map((_, idx) => (
            <TeamCircle key={idx} imgUrl="/images/team2.png" />
          ))}
      </div>
      <div className="flex flex-wrap justify-center items-center space-x-4">
        {Array(6)
          .fill("")
          .map((_, idx) => (
            <TeamCircle key={idx} imgUrl="/images/team3.png" />
          ))}
      </div>
    </div>
  );
};

export default TeamCollection;
