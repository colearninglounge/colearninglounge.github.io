import ActiveJobsCard from "./ActiveJobsCard";

const ActiveJobsCollection = () => {
  return (
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
      {Array(6)
        .fill("")
        .map((_, idx) => (
          <ActiveJobsCard key={idx} />
        ))}
    </div>
  );
};

export default ActiveJobsCollection;
