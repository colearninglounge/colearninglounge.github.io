import ServicesCollection from "./services/ServicesCollection";

const Services = () => {
  return (
    <div className="mt-16 px-6 md:px-0 text-center">
      <div className="container xl:px-12 mx-auto">
        <h2 className="font-bold text-3xl md:text-5xl">
          Our Products/Services
        </h2>
        <h3 className="font-normal mt-3 md:max-w-prose mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non amet in
          adipiscing ultrices consectetur nunc volutpat. Ipsum ipsum mattis enim
          habitant non porta.
        </h3>
        <ServicesCollection />
      </div>
    </div>
  );
};

export default Services;
