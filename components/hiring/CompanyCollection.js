import { AirBnb, FedEx, Google, Hubspot, Microsoft, Walmart } from "../Icons";

const CompanyCollection = () => {
  return (
    <div className="mt-16 py-2 border-t border-b border-gray-100">
      <div className="py-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-y-12 items-center justify-items-center max-w-4xl mx-auto">
        <AirBnb />
        <Hubspot />
        <Google />
        <Microsoft />
        <Walmart />
        <FedEx />
      </div>
      <div className="w-full border-t border-gray-100" />
      <div className="py-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-y-12 items-center justify-items-center max-w-4xl mx-auto">
        <Microsoft />
        <Hubspot />
        <FedEx />
        <AirBnb />
        <Walmart />
        <Google />
      </div>
    </div>
  );
};

export default CompanyCollection;
