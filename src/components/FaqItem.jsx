import { useState } from "react";
import faqIcon from "../assets/faq.svg";
import clsx from "clsx";

const FaqItem = ({ id, question, answer }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="py-7 flex items-start space-x-11">
      <span className="text-blue-800 font-semibold text-lg">0{id}</span>
      <div className="flex-1">
        <h4 className="text-lg font-medium mb-3">{question}</h4>
        {isActive && (
          <p className="text-sm text-primary-2/75 max-w-md">{answer}</p>
        )}
      </div>
      <button className="cursor-pointer" onClick={() => setIsActive(!isActive)}>
        <img
          src={faqIcon}
          className={clsx(
            "block transition duration-300",
            isActive ? "rotate-0" : "-rotate-45"
          )}
        />
      </button>
    </div>
  );
};

export default FaqItem;
