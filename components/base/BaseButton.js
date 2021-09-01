const BaseButton = ({
  text,
  classes,
  rounded = true,
  center,
  onClick,
  up = true,
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-8 flex items-center ${
        center ? "justify-center" : "justify-between"
      } py-2 font-bold ${rounded ? "rounded-full" : "rounded-md"} ${
        classes ? classes : "bg-white text-gray-700"
      } ${
        up && "hover:-translate-y-2"
      } focus:outline-none focus:ring-1 focus:ring-indigo-600 focus:ring-offset-2 focus:ring-offset-indigo-700 hover:shadow-xl transform transition-all duration-300`}
    >
      {text}
    </button>
  );
};

export default BaseButton;
