import NewsCard from "./NewsCard";

const NewsCollection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-6 mt-16">
      {Array(4)
        .fill("")
        .map((_, idx) => (
          <NewsCard key={idx} />
        ))}
    </div>
  );
};

export default NewsCollection;
