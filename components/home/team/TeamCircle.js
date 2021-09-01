import { useState } from "react";
import BaseTeamGridSocials from "../../base/BaseTeamGridSocials";

const TeamCircle = ({
  imgUrl,
  position = "CEO of Google",
  socials = {
    instagram: {
      url: "https://www.instagram.com/",
      background: "bg-teamInstagram",
    },
    facebook: { url: "https://www.facebook.com/", background: "bg-gray-300" },
    github: { url: "https://github.com/", background: "bg-gray-800" },
    linkedin: { url: "https://www.linkedin.com/", background: "bg-hero" },
  },
}) => {
  const [mobileClass, setMobileClass] = useState(`hidden`);

  const alterShowSocialsOnMobile = () => {
    console.log(`clicked`);
    if (mobileClass === "hidden") {
      setMobileClass("block");
    } else {
      setMobileClass("hidden");
    }
  };

  return (
    <>
      <div className="hidden md:block">
        <div className="flex flex-col items-center justify-center group">
          <div className="relative h-32 w-32 rounded-full">
            <img src={imgUrl} alt="team" />
            <div className="w-3/4 h-3/4 rounded-full overflow-hidden bg-indigo-600 absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4 z-10 transition-all duration-300 opacity-0 md:group-hover:opacity-100">
              <div className="grid grid-cols-2 grid-rows-2 w-full h-full">
                <BaseTeamGridSocials socials={socials} />
              </div>
            </div>
          </div>
          <p className="font-bold text-black -mt-4 text-sm">{position}</p>
        </div>
      </div>
      <div className="block md:hidden" onClick={alterShowSocialsOnMobile}>
        <div className="flex flex-col items-center justify-center group">
          <div className="relative h-32 w-32 rounded-full">
            <img src={imgUrl} alt="team" />
            {alterShowSocialsOnMobile && (
              <div
                className={`w-3/4 h-3/4 rounded-full overflow-hidden bg-indigo-600 absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4 z-10 ${mobileClass}`}
              >
                <div className="grid grid-cols-2 grid-rows-2 w-full h-full">
                  <BaseTeamGridSocials socials={socials} />
                </div>
              </div>
            )}
          </div>
          <p className="font-bold text-black -mt-4 text-sm">{position}</p>
        </div>
      </div>
    </>
  );
};

export default TeamCircle;
