import ServiceCard from "./ServiceCard";

const ServicesCollection = () => {
  return (
    <div className="space-y-24 mt-16">
      {["Mock Interviews", "Resume Review", "Resume preparation"].map(
        (heading, idx) =>
          idx % 2 === 0 ? (
            <ServiceCard heading={heading} key={idx} />
          ) : (
            <ServiceCard heading={heading} key={idx} inverted />
          )
      )}
    </div>
  );
};

export default ServicesCollection;
