import {
  RP,
  Breaker,
  LinkedIn,
  Overcast,
  Spotify,
  ApplePod,
  CastBox,
} from "../Icons";

const OtherPlatforms = () => {
  return (
    <div className="mt-24 text-center container xl:px-12 mx-auto">
      <h2 className="text-secondary font-bold text-5xl">
        Also listen to us on
      </h2>
      <div className="grid grid-cols-3 items-center justify-items-center gap-6 md:grid-cols-7 mt-12 w-4/5 mx-auto">
        <LinkedIn className="w-12" />
        <ApplePod className="w-12" />
        <Breaker className="w-12" />
        <CastBox className="w-12" />
        <Overcast className="w-12" />
        <Spotify className="w-16" />
        <RP className="w-12" />
      </div>
    </div>
  );
};

export default OtherPlatforms;
