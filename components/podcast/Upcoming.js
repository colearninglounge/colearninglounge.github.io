import UpcomingPodcastCollection from "./upcoming/UpcomingPodcastCollection";

const Upcoming = () => {
  return (
    <div className="mt-24 px-6 md:px-0 text-center container xl:px-12 mx-auto">
      <h2 className="text-secondary font-bold text-3xl md:text-5xl">
        Upcoming Podcasts
      </h2>
      <UpcomingPodcastCollection />
    </div>
  );
};

export default Upcoming;
