const Selector = ({ index, active, handleSlideChange }) => {
  const handleClick = () => {
    handleSlideChange(index);
  };

  return (
    <span
      onClick={handleClick}
      className={`inline-block w-3 h-3 rounded-full cursor-pointer ${
        active === index ? "bg-white" : "bg-slider"
      }`}
    />
  );
};

export default Selector;
