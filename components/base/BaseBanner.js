import Image from "next/image";
import { Cross } from "../Icons";

const BaseBanner = ({ setShowBanner }) => {
  return (
    <div className="w-full relative py-4 px-6 text-white bg-indigo-700">
      <Image
        src="/images/banner-bg.png"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="object-cover fixed z-0 pointer-events-none"
        alt="banner background"
      />
      <div className="flex justify-between items-center relative z-50">
        <h4>
          Reclaim 2021 Sale || Earn a 40% scholarship || Ends on Jan 28th 2021
        </h4>
        <button onClick={() => setShowBanner(false)}>
          <Cross className="w-6" />
        </button>
      </div>
    </div>
  );
};

export default BaseBanner;
