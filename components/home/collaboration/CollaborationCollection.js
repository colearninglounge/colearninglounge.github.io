import {
  AirBnb,
  FedEx,
  Google,
  Hubspot,
  Microsoft,
  Walmart,
} from "../../Icons";

const CollaborationCollection = () => {
  return (
    <div className="py-8 mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-y-12 items-center justify-items-center max-w-4xl mx-auto border-t border-b border-gray-100">
      <AirBnb />
      <Hubspot />
      <Google />
      <Microsoft />
      <Walmart />
      <FedEx />
    </div>
  );
};

export default CollaborationCollection;
