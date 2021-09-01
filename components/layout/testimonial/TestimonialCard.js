const TestimonialCard = ({
  bgClass,
  iconBg,
  imgSrc,
  imgClass,
  name,
  width,
  handle,
  children,
  testimonial,
  icon,
  childWidth,
  link = "https://www.youtube.com/",
}) => {
  return children ? (
    <div className={childWidth ? childWidth : "max-w-sm"}>{children}</div>
  ) : (
    <div
      className={`p-6 rounded-md min-w-80 ${
        width ? width : "max-w-sm"
      } text-left ${bgClass ? bgClass : "bg-testSocialCardBg"}`}
    >
      <div className="flex space-x-4 items-center">
        <img
          src={imgSrc}
          alt="profile"
          className={imgClass ? imgClass : "w-12"}
        />

        <div className="flex-1">
          <h4 className="text-black">{name}</h4>
          <h5 className="text-socialHandle text-xs">{handle}</h5>
        </div>
        <a href={link} target="_blank" rel="noreferrer noopener">
          <div
            className={`h-12 w-12 rounded-full ${
              iconBg ? iconBg : "bg-socialBg"
            } flex items-center justify-center`}
          >
            {icon}
          </div>
        </a>
      </div>
      <h4 className="text-black mt-6 leading-relaxed">{testimonial}</h4>
    </div>
  );
};

export default TestimonialCard;
