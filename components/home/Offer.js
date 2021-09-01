import OfferReasons from "./offer/OfferReasons";

const Offer = () => {
  return (
    <div className="mt-32 px-6 md:px-0 text-center container xl:px-12 mx-auto">
      <h2 className="text-secondary font-bold text-3xl md:text-5xl">
        What do we offer?
      </h2>
      <h3 className="text-blackAlt font-normal mt-3">
        We offers worlds best technique for you to learn and collaborate.
      </h3>
      <OfferReasons />
    </div>
  );
};

export default Offer;
