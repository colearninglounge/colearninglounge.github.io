import RecentPodcastCard from "./RecentPodcastCard";

const RecentPodcastCollection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 container xl:px-12 mx-auto mt-20">
      {Array(8)
        .fill("")
        .map((_, idx) => (
          <RecentPodcastCard key={idx} />
        ))}
    </div>
  );
};

export default RecentPodcastCollection;
