import Image from "next/image";
import { NewsletterIcon } from "../Icons";

const NewsLetter = () => {
  return (
    <div className="mt-24 text-center container xl:px-12 mx-auto">
      <div className="grid sm:grid-cols-1 sm:items-center sm:justify-items-center lg:grid-cols-5 lg:px-24 py-12 mt-24 text-center w-4/5 mx-auto rounded-lg relative">
        <Image
          src="/images/newsletter-bg.png"
          className="object-cover rounded-lg pointer-events-none"
          alt="newsletter background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <NewsletterIcon className="lg:col-span-2 mx-auto lg:mx-0 w-2/5 md:w-36 relative z-50" />
        <div className="lg:col-span-3 mt-4 px-8 lg:px-0 lg:mt-0 relative z-50 w-full md:w-3/5 mx-auto lg:w-auto">
          <h4 className="text-xl lg:text-3xl font-bold text-white text-center lg:text-left leading-normal mb-4">
            Join podcast <br /> broadcasting list
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

export default NewsLetter;
