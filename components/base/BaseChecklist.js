import { CheckMark } from "../Icons";

const BaseChecklist = ({ heading, list, ml = "1", spacing, mt }) => {
  return (
    <div className={`${ml && "space-x-2"} text-left ${mt ? mt : "mt-0"}`}>
      <h4 className="text-blackAlt text-xl text-center md:text-left font-semibold">
        {heading}
      </h4>
      <ul className={spacing ? spacing : "space-y-3 mt-4"}>
        {list.map((listItem, key) => (
          <li className="list-none flex items-center font-medium" key={key}>
            <CheckMark className="mr-2 w-6" /> {listItem}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BaseChecklist;
