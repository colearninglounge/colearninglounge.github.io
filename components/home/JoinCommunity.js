import BaseButton from "../base/BaseButton";

const JoinCommunity = () => {
  return (
    <div className="mt-24 py-24 bg-gradient-to-br from-heroGradLeft to-heroGradRight">
      <div className="container xl:px-12 mx-auto md:flex md:items-center">
        <div className="w-1/3">
          <img src="/images/joinCommunity.png" alt="joinCommunity" />
        </div>
        <div className="px-24">
          <h2 className="text-white font-bold text-5xl">
            Want to Join Our Community ?
          </h2>
          <h3 className="text-white font-normal mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus non
            quam dictumst porttitor fermentum, tortor aliquet mauris fermentum.
          </h3>
          <BaseButton
            text="Join Our Community"
            classes="bg-white text-primary mt-16"
          />
        </div>
      </div>
    </div>
  );
};

export default JoinCommunity;
