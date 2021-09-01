const BaseDate = ({ month, date, className }) => {
  return (
    <div
      className={`text-black font-bold text-center divide-y-2 divide-black rounded-md overflow-hidden ${className}`}
    >
      <h3 className="bg-red-300 px-4">{month}</h3>
      <h2 className="text-4xl px-4 bg-white">{date}</h2>
    </div>
  );
};

export default BaseDate;
