import CompanyCollection from "./CompanyCollection";

const Companies = () => {
  return (
    <div className="mt-20 px-6 md:px-0 text-center container xl:px-12 mx-auto">
      <div>
        <h2 className="text-secondary font-bold text-3xl md:text-5xl">
          Tech companies trust our talent.
        </h2>
        <CompanyCollection />
        <h3 className="text-gray-400">and many more ...</h3>
      </div>
    </div>
  );
};

export default Companies;
