import BaseChecklist from "../../base/BaseChecklist";
import { ServicePriceBg } from "../../Icons";

const ServicePricingCard = ({
  heading,
  offers = [
    "One free for the first time",
    "Unlimited Mock Interviews",
    "Unlimited Support",
    "Online Webinar",
    "Free Job Refferals",
  ],
  price = "19",
}) => {
  return (
    <div className="px-6 py-4 rounded-md shadow-xl max-w-xs min-w-80 relative">
      <BaseChecklist
        ml={0}
        mt="mt-6"
        heading={heading}
        list={offers}
        spacing="mt-8 space-y-5"
      />
      <div>
        <button className="bg-primary text-white w-4/5 font-medium py-3 rounded-md mt-6 focus:outline-none focus:ring-1 focus:ring-indigo-600 focus:ring-offset-2 focus:ring-offset-indigo-700 hover:shadow-xl transform transition-all duration-300 hover:-translate-y-2">
          Contact Us
        </button>
      </div>
      <div className="absolute right-4 top-0 flex flex-col justify-between items-center font-bold">
        <ServicePriceBg className="w-16" />
        <h5 className="text-2xl transform -translate-y-14 translate-x-2 text-white">
          <span className="text-sm">$</span>
          {price}
        </h5>
      </div>
    </div>
  );
};

export default ServicePricingCard;
