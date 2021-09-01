const Footer = ({ mt }) => {
  return (
    <div
      className={`bg-gray-900 text-gray-500 divide-y-2 divide-gray-400 font-bold text-sm text-center md:text-left ${
        mt ? `mt-${mt}` : "mt-20"
      }`}
    >
      <div className="container px-6 md:px-0 xl:px-12 mx-auto py-16 grid grid-cols-1 justify-items-center md:grid-cols-5 gap-x-16">
        <div className="md:col-span-2">
          <img
            src="/images/logo-footer.png"
            className="w-48 mx-auto md:mx-0"
            alt="logo-footer"
          />
          <h4 className="text-base self-start font-normal leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar
            massa viverra et cursus. Ut lacinia bibendum cursus posuere.
          </h4>
        </div>

        <div className="mt-8 md:mt-0">
          <h5 className="mb-6">Pages</h5>
          <div className="text-white space-y-2">
            <h5>Home</h5>
            <h5>Podcast</h5>
            <h5>Jobs</h5>
            <h5>Blogs</h5>
            <h5>Learning</h5>
          </div>
        </div>

        <div className="mt-8 md:mt-0">
          <h5 className="mb-6">Services</h5>
          <div className="text-white space-y-2">
            <h5>Resume Review</h5>
            <h5>LinkedIn Review</h5>
            <h5>Mockup Interview</h5>
          </div>
        </div>

        <div className="mt-8 md:mt-0">
          <h5 className="mb-6">Resources</h5>
          <div className="text-white space-y-2">
            <h5>Documentation</h5>
            <h5>Pricing</h5>
            <h5>Courses</h5>
          </div>
        </div>
      </div>

      <div className="py-8 px-6 md:px-0 text-gray-500 font-bold text-sm">
        <div className="container xl:px-12 mx-auto flex items-center justify-between">
          <h5>©2020-2021 All Rights Reserved.</h5>
          <h5 className="text-white">Terms of Service</h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;
