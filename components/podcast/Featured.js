import FeaturedPodcastCollection from "./featured/FeaturedPodcastCollection";

const Featured = () => {
  return (
    <div className="mt-12 px-6 md:px-0 text-center container xl:px-12 mx-auto">
      <h2 className="text-secondary font-bold text-3xl md:text-5xl">
        Top Featured
      </h2>
      <FeaturedPodcastCollection />
    </div>
  );
};

export default Featured;
