import { Facebook, Twitter, Youtube } from "../../Icons";
import TestimonialCard from "./TestimonialCard";

const TestimonialCollection = () => {
  return (
    <div>
      <div className="flex flex-nowrap justify-start items-end gap-6 md:container xl:px-12 mt-24 relative z-50 overscroll-x-scroll">
        <TestimonialCard
          imgSrc="/images/madaline.png"
          name="Madaline Gibson"
          handle="@madaline500"
          testimonial="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et celerisque mattis orci vitae netus. Penatibus in sagittis habitasse urna eu quam tellus fermentum.”"
          icon={<Twitter />}
        />
        <TestimonialCard
          imgSrc="/images/jake.png"
          name="Jake Peralta"
          handle="@jake231"
          testimonial={
            <a
              href="https://youtu.be/yfvAJ1DeTRY"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                className="rounded-md"
                src="https://i.ytimg.com/vi/yfvAJ1DeTRY/maxresdefault.jpg"
                alt="thumbnail"
              />
            </a>
          }
          width="max-w-xs"
          link="https://youtu.be/yfvAJ1DeTRY"
          iconBg="bg-red-100"
          icon={<Youtube />}
        />
        <TestimonialCard
          imgSrc="/images/rick.png"
          name="Rick Grimes"
          handle="@rick"
          testimonial="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et celerisque mattis orci vitae netus.”"
          width="max-w-sm"
          bgClass="bg-testSocialCardGreen"
          icon={<Facebook />}
        />
        <TestimonialCard
          imgSrc="/images/madaline.png"
          name="Madaline Gibson"
          handle="@madaline500"
          testimonial="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et celerisque mattis orci vitae netus. Penatibus in sagittis habitasse urna eu quam tellus fermentum.”"
          icon={<Twitter />}
        />
        <TestimonialCard
          imgSrc="/images/rick.png"
          name="Rick Grimes"
          handle="@rick"
          testimonial="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et celerisque mattis orci vitae netus.”"
          width="max-w-sm"
          bgClass="bg-testSocialCardGreen"
          icon={<Facebook />}
        />
      </div>
      <div className="flex flex-nowrap justify-start items-start gap-6 container xl:px-12 mt-8 relative z-50">
        <TestimonialCard
          imgSrc="/images/madaline.png"
          name="Madaline Gibson"
          handle="@madaline500"
          bgClass="bg-testSocialCardOrange"
          testimonial="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et celerisque mattis orci vitae netus. Penatibus in sagittis habitasse urna eu quam tellus fermentum.”"
          icon={<Twitter />}
        />
        <TestimonialCard
          imgSrc="/images/rick.png"
          name="Rick Grimes"
          handle="@rick"
          testimonial="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et celerisque mattis orci vitae netus.”"
          icon={<Facebook />}
        />
        <TestimonialCard
          imgSrc="/images/madaline.png"
          name="Madaline Gibson"
          handle="@madaline500"
          testimonial="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et celerisque mattis orci vitae netus. Penatibus in sagittis habitasse urna eu quam tellus fermentum.”"
          icon={<Twitter />}
        />
        <TestimonialCard
          imgSrc="/images/jake.png"
          name="Jake Peralta"
          handle="@jake231"
          testimonial="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et celerisque mattis orci vitae netus. Penatibus in sagittis habitasse urna eu quam tellus fermentum.  Penatibus in sagittis habitasse urna eu quam tellus fermentum.”"
          width="max-w-xs"
          icon={<Facebook />}
        />
        <TestimonialCard
          imgSrc="/images/madaline.png"
          name="Madaline Gibson"
          handle="@madaline500"
          bgClass="bg-testSocialCardOrange"
          testimonial="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et celerisque mattis orci vitae netus. Penatibus in sagittis habitasse urna eu quam tellus fermentum.”"
          icon={<Twitter />}
        />
      </div>
    </div>
  );
};

export default TestimonialCollection;
