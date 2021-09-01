import Selector from "./slider/Selector";

const Slider = ({ active, handleSlideChange, className }) => {
  const indices = 3;
  return (
    <div
      className={`absolute left-1/2 transform -translate-x-1/2 -bottom-8 space-x-2 ${className}`}
    >
      {Array(indices)
        .fill("")
        .map((_, idx) => (
          <Selector
            key={idx}
            index={idx + 1}
            active={active}
            handleSlideChange={handleSlideChange}
          />
        ))}
    </div>
  );
};

export default Slider;
