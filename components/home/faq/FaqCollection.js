import { useState } from "react";
import FaqCard from "./FaqCard";

const FaqCollection = ({ dropdowns }) => {
  const [active, setActive] = useState(null);

  const toggleActive = (idx) => {
    if (active === idx) return setActive(null);
    setActive(idx);
  };

  return (
    <div className="container mt-12 pb-8 space-y-6">
      {Array(4)
        .fill("")
        .map((_, idx) =>
          dropdowns.map(({ question, answers }) => (
            <FaqCard
              key={idx}
              active={active}
              idx={idx}
              toggleActive={toggleActive}
              heading={question}
              dropdown={
                <>
                  {answers.map((ans, idx) => (
                    <p key={idx}>{ans}</p>
                  ))}
                </>
              }
            />
          ))
        )}
    </div>
  );
};

export default FaqCollection;
