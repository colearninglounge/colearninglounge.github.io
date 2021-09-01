import { Quote } from "../Icons";

const Hire = () => {
  return (
    <div className="my-28 px-6 md:px-0 text-center container xl:px-12 mx-auto">
      <div>
        <h2 className="text-secondary font-bold text-3xl md:text-5xl">
          Hire your next Top Developer
        </h2>
        <div className="flex flex-col md:flex-row justify-center md:space-x-14 items-center mt-8">
          <h4
            className={`text-xl text-center md:text-left leading-relaxed max-w-prose italic text-blackAlt relative mb-8 md:mb-0`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis
            turpis porta leo, tincidunt vitae nunc quis. Sed eget lectus euismod
            sit scelerisque molestie eget maecenas cursus. Aliquet purus diam
            quis mauris pretium facilisis enim, hendrerit leo. Varius laoreet
            enim in etiam quam tincidunt.
            <Quote className="w-10 absolute -top-4 -left-4 opacity-40" />
          </h4>
          <img
            src="/images/hero-3.png"
            alt="Hire your next Top Developer"
            className="h-64 my-8 md:my-0 md:h-auto md:max-h-96"
          />
        </div>
      </div>
    </div>
  );
};

export default Hire;
