const JoinSingles = ({ children, headline, description }) => {
  return (
    <div>
      {children}
      <h4 className="text-blackAlt text-xl font-bold -mt-2">{headline}</h4>
      <h5 className="text-blackAlt text-base max-w-sm mx-auto mt-2">
        {description}
      </h5>
    </div>
  );
};

export default JoinSingles;
