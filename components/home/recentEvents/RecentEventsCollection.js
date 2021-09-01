import RecentEventCard from "./RecentEventCard";

const RecentEventsCollection = ({ scrollRef }) => {
  return (
    <div
      className="flex items-center gap-2 pl-6 md:pl-0 space-x-8 py-16 overflow-x-scroll overflow-y-visible no-scrollbar"
      ref={scrollRef}
    >
      {Array(4)
        .fill("")
        .map((_, idx) => (
          <RecentEventCard key={idx} imgIdx={idx + 1} />
        ))}
    </div>
  );
};

export default RecentEventsCollection;
