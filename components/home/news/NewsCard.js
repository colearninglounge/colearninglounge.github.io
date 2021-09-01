const NewsCard = () => {
  return (
    <div className="flex justify-between items-center rounded-md overflow-hidden text-left bg-gray-100 shadow-2xl">
      <h4 className="md:text-lg font-medium text-blackAlt pl-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed
        faucibus quam.
      </h4>
      <img src="/images/hindu.png" className="w-32" alt="hindu" />
    </div>
  );
};

export default NewsCard;
