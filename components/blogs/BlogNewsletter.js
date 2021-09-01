import Image from "next/image";
import { NewsletterIcon } from "../Icons";

const BlogNewsletter = ({ className }) => {
  return (
    <div className={`text-center ${className}`}>
      <div className="grid text-center w-full rounded-lg relative">
        <Image
          src="/images/newsletter-bg.png"
          className="object-cover rounded-lg pointer-events-none"
          alt="newsletter background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <NewsletterIcon className="mx-auto w-1/3 relative z-50" />
        <div className="pb-12 pt-4 px-8 relative z-50 w-full mx-auto">
          <h4 className="text-xl font-bold text-white text-center leading-normal mb-4">
            Join podcast <br className="md:hidden" /> broadcasting list
          </h4>
          <form className="lg:min-w-96 flex flex-col items-center space-y-4 lg:space-y-0 lg:flex-row lg:justify-start lg:items-end">
            <input
              type="email"
              placeholder="Your work email address"
              className="w-full lg:w-auto lg:flex-grow rounded-lg lg:rounded-none lg:rounded-tl-lg lg:rounded-bl-lg border-none mt-1 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-500"
            />
            <button
              type="submit"
              className="text-white bg-blackAlt font-bold px-3 py-2 rounded-lg lg:rounded-none lg:rounded-tr-lg lg:rounded-br-lg focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-500"
            >
              Join the waitlist
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogNewsletter;
