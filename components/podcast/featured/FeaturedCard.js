import Link from "next/link";

const FeaturedCard = ({ avatar, name, position, className }) => {
  return (
    <div
      className={`flex items-center px-8 py-6 shadow-xl relative rounded-md overflow-hidden group ${className} bg-white z-50`}
    >
      <img src={avatar} alt={`${name} avatar`} className="w-16 mr-6" />
      <div className="text-left">
        <h4 className="font-bold text-lg mb-1">{name}</h4>
        <h5 className="font-normal text-sm leading-tight text-gray-600">
          {position}
        </h5>
      </div>
      <Link href="/podcast">
        <button className="absolute bottom-0 right-0 px-4 py-2 bg-primary text-white rounded-tl-md text-sm opacity-0 transition-all duration-300 group-hover:opacity-100">
          Learn More ➡
        </button>
      </Link>
    </div>
  );
};

export default FeaturedCard;
