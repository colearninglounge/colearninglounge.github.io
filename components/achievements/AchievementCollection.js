import AchievementCard from "./AchievementCard";

const AchievementCollection = ({ scrollRef }) => {
  return (
    <div
      className="flex items-center pl-6 md:pl-0 space-x-8 gap-2 mt-16 overflow-x-scroll no-scrollbar relative"
      ref={scrollRef}
    >
      {Array(4)
        .fill("")
        .map((_, idx) => {
          if (idx % 2 === 0) {
            return <AchievementCard key={idx} />;
          }
          return (
            <AchievementCard
              key={idx}
              category="PLATFORMS"
              time="1 month ago"
              gradientLeft="from-projectBlueGradLeft"
              gradientRight="to-projectBlueGradRight"
            />
          );
        })}
    </div>
  );
};

export default AchievementCollection;
