import BaseButton from "../base/BaseButton";

const Hero = ({ title, heading, imgSrc, buttonText = "Explore" }) => {
  return (
    <div className="bg-gradient-to-r from-heroGradLeft to-heroGradRight md:min-h-screen px-6 md:px-0 text-center md:text-left md:flex md:items-center text-white">
      <div className="container xl:px-12 relative mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 relative mt-24 md:mt-0">
          <img
            src="/images/hero-lt.png"
            alt="decoration"
            className="hidden md:block w-16 md:w-24 absolute -left-12 -top-12 z-0"
          />
          <img
            src="/images/hero-rt.png"
            alt="decoration"
            className="hidden md:block w-16 md:w-24 absolute right-40 top-16 z-0"
          />
          <img
            src="/images/hero-ld.png"
            alt="decoration"
            className="hidden md:block w-16 md:w-24 absolute -left-12 -bottom-12 z-0"
          />
          <img
            src="/images/hero-rd.png"
            alt="decoration"
            className="hidden md:block w-16 md:w-24 absolute right-28 -bottom-12 z-0"
          />
          <h2 className="tracking-widest z-10 relative">{title}</h2>
          <h1 className="text-3xl md:text-6xl leading-tight font-bold mt-2 z-10 relative">
            {heading}
          </h1>
          <BaseButton
            text={buttonText}
            classes="bg-pink-600 text-white mt-8 text-xl tracking-wider z-10 relative mx-auto md:mx-0"
          />
        </div>
        <div className="md:w-1/2 relative flex justify-center">
          <img
            src={imgSrc}
            alt="hero"
            className="h-64 my-8 md:my-0 md:h-auto md:max-h-140"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
