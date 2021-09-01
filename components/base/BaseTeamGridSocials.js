import { Facebook, Instagram, Github, LinkedinTeam } from "../Icons";

const BaseTeamGridSocials = ({ socials }) => {
  const socialsLength = Object.keys(socials).length;

  return socialsLength === 4 ? (
    <>
      {Object.keys(socials).map((social, idx) => (
        <div
          key={social}
          className={`${
            socials[social].background
          } flex justify-center items-center ${idx === 0 && "pl-2 pt-2"} ${
            idx === 1 && "pt-1 pr-1"
          } ${idx === 2 ? "pl-1 pb-1" : "pb-1 pr-1"}`}
        >
          {social === "facebook" ? (
            <a
              href={socials[social].url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook />
            </a>
          ) : social === "instagram" ? (
            <a
              href={socials[social].url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-5" />
            </a>
          ) : social === "github" ? (
            <a
              href={socials[social].url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5" />
            </a>
          ) : (
            <a
              href={socials[social].url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinTeam className="w-5" />
            </a>
          )}
        </div>
      ))}
    </>
  ) : socialsLength === 3 ? (
    <>
      {Object.keys(socials).map((social, idx) => (
        <div
          key={social}
          className={`${
            socials[social].background
          } flex justify-center items-center ${idx === 0 && "pl-1 pt-1"} ${
            idx === 1 && "pr-1 pt-1"
          } ${idx === 2 && "col-span-2"}`}
        >
          {social === "facebook" ? (
            <a
              href={socials[social].url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook />
            </a>
          ) : social === "instagram" ? (
            <a
              href={socials[social].url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-5" />
            </a>
          ) : social === "github" ? (
            <a
              href={socials[social].url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5" />
            </a>
          ) : (
            <a
              href={socials[social].url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinTeam className="w-5" />
            </a>
          )}
        </div>
      ))}
    </>
  ) : socialsLength === 2 ? (
    <>
      {Object.keys(socials).map((social) => (
        <div
          key={social}
          className={`${socials[social].background} flex justify-center items-center col-span-2`}
        >
          {social === "facebook" ? (
            <a
              href={socials[social].url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook />
            </a>
          ) : social === "instagram" ? (
            <a
              href={socials[social].url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-5" />
            </a>
          ) : social === "github" ? (
            <a
              href={socials[social].url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5" />
            </a>
          ) : (
            <a
              href={socials[social].url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinTeam className="w-5" />
            </a>
          )}
        </div>
      ))}
    </>
  ) : (
    <>
      {Object.keys(socials).map((social) => (
        <div
          key={social}
          className={`${socials[social].background} flex justify-center items-center col-span-2 row-span-2`}
        >
          {social === "facebook" ? (
            <a
              href={socials[social].url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook />
            </a>
          ) : social === "instagram" ? (
            <a
              href={socials[social].url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-5" />
            </a>
          ) : social === "github" ? (
            <a
              href={socials[social].url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5" />
            </a>
          ) : (
            <a
              href={socials[social].url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinTeam className="w-5" />
            </a>
          )}
        </div>
      ))}
    </>
  );
};

export default BaseTeamGridSocials;
