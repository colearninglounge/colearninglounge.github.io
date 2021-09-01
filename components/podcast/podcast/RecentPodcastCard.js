const RecentPodcastCard = ({
  thumb = "/images/podcastThumb.png",
  name = "Data Science Masterminds - S1E1 ",
  host = "Moez Ali",
  date = "Nov 22,2020",
  description = "Today we have with us, someone who got recognized for spreading positivity to tackle.",
  audioSrc,
}) => {
  return (
    <div className="flex px-6 py-2 items-center shadow-xl space-x-4 rounded-md">
      <img src={thumb} alt={`${name} thumb`} className="w-24 -ml-2" />
      <div className="text-left space-y-2">
        <h4 className="font-semibold text-blackAlt text-lg">{name}</h4>
        <h5 className="text-gray-600 text-sm">
          by {host}, on <span className="font-semibold">{date}</span>
        </h5>
        <h5 className="text-blackAlt text-sm">{description}</h5>
        <div className="w-full py-3 bg-indigo-300"></div>
      </div>
    </div>
  );
};

export default RecentPodcastCard;
