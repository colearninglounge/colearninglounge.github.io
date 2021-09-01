import UpcomingPodcastCard from "./UpcomingPodcastCard";

const UpcomingPodcastCollection = () => {
  return (
    <div className="container xl:px-12 mx-auto mt-20 space-y-12">
      <UpcomingPodcastCard />
      <UpcomingPodcastCard inverted />
    </div>
  );
};

export default UpcomingPodcastCollection;
