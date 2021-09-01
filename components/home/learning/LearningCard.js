const LearningCard = ({ icon, headline, description }) => {
  return (
    <div className="flex flex-col items-start text-center md:text-left py-6 lg:py-0">
      <div className="min-w-16 mx-auto md:mx-0 min-h-16 rounded-full bg-socialBg flex justify-center items-center">
        {icon}
      </div>
      <h4 className="text-blackAlt mx-auto md:mx-0 text-xl font-bold mt-2">
        {headline}
      </h4>
      <h5 className="text-blackAlt mx-auto md:mx-0 text-base mt-2">
        {description}
      </h5>
    </div>
  );
};

export default LearningCard;
