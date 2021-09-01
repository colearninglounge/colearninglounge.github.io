import Form from "../layout/Form";

const Speaker = () => {
  return (
    <div className="mt-24 py-24 bg-gradient-to-tr from-heroGradLeft to-heroGradRight px-6 md:px-0 text-center">
      <div className="container xl:px-12 mx-auto">
        <div className="container xl:px-12 mx-auto">
          <h2 className="text-white font-bold text-3xl md:text-5xl">
            Want to Become a Speaker?
          </h2>
          <h3 className="text-white font-normal mt-3 md:w-2/3 mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non amet in
            adipiscing ultrices consectetur nunc volutpat. Ipsum ipsum mattis
            enim habitant non porta.
          </h3>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Speaker;
