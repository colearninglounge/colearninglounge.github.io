import { Quote } from "../../Icons";
import ServicePricingCard from "./ServicePricingCard";

const ServiceCard = ({
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis turpis porta leo, tincidunt vitae nunc quis. Sed eget lectus euismod sit scelerisque molestie eget maecenas cursus. Aliquet purus diam quis mauris pretium facilisis enim, hendrerit leo. Varius laoreet enim in etiam quam tincidunt.",
  heading,
  inverted,
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-center md:space-x-14 items-center">
      {inverted ? (
        <>
          <ServicePricingCard heading={heading} />
          <h4
            className={`text-xl text-center md:text-left leading-relaxed max-w-prose italic text-blackAlt relative mt-8 md:mt-0`}
          >
            {description}
            <Quote className="w-10 absolute -top-4 -left-4 opacity-40" />
          </h4>
        </>
      ) : (
        <>
          <h4
            className={`text-xl text-center md:text-left leading-relaxed max-w-prose italic text-blackAlt relative mb-8 md:mb-0`}
          >
            {description}
            <Quote className="w-10 absolute -top-4 -left-4 opacity-40" />
          </h4>
          <ServicePricingCard heading={heading} />
        </>
      )}
    </div>
  );
};

export default ServiceCard;
