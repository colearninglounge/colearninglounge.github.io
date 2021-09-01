import RecentPodcastCollection from "./podcast/RecentPodcastCollection";

const RecentPodcast = () => {
  return (
    <div className="mt-24 px-6 md:px-0 text-center container xl:px-12 mx-auto">
      <h2 className="text-secondary font-bold text-3xl md:text-5xl">
        Recent Podcasts
      </h2>
      <RecentPodcastCollection />
    </div>
  );
};

export default RecentPodcast;
