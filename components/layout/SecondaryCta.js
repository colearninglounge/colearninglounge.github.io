import BaseButton from "../base/BaseButton";

const SecondaryCta = ({
  heading,
  description,
  btnTxt,
  imgSrc = "/images/joinCommunity.png",
}) => {
  return (
    <div className="mt-24 py-6 bg-gradient-to-br from-heroGradLeft to-heroGradRight">
      <div className="container xl:px-12 mx-auto md:flex md:items-center">
        <div className="w-1/3 mx-auto">
          <img src={imgSrc} alt="join-us" />
        </div>
        <div className="px-6 md:px-24 mt-8 md:mt-0 text-center md:text-left">
          <h2 className="text-white font-bold text-4xl">{heading}</h2>
          <h3 className="text-white font-normal mt-6">{description}</h3>
          <div className="flex justify-center items-center md:block">
            <BaseButton text={btnTxt} classes="bg-white text-primary mt-16" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondaryCta;
