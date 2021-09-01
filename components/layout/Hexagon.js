import Image from "next/image";

const Hexagon = ({ title, description }) => {
  return (
    <div className="relative flex justify-center items-center py-8">
      <Image
        className="object-cover"
        src="/images/hex.png"
        alt="hexagon"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="relative z-50 py-10 px-4 md:py-16 -mt-2">
        <h2 className="md:text-xl font-bold">{title}</h2>
        <p className="mt-1 font-medium text-xs md:text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Hexagon;
