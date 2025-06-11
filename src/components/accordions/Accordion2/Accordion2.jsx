import { useRef, useState } from "react";
import "./Accordion2.css";

const AccordionItem = (props) => {
  const contentEl = useRef(null);
  const { handleToggle, active, item, index } = props;
  const { header, content } = item;

  return (
    <li className="accordion-2-item">
      <h2
        className={active === index ? "active" : ""}
        onClick={() => handleToggle(index)}
      >
        {header}
        <span className="material-symbols-outlined">expand_more</span>
      </h2>
      <div
        ref={contentEl}
        className={`content ${active === index ? "show" : ""}`}
        style={
          active === index
            ? { height: contentEl?.current?.scrollHeight }
            : { height: 0 }
        }
      >
        <p>{content}</p>
      </div>
    </li>
  );
};

export const Accordion2 = ({ items }) => {
  const [active, setActive] = useState(null);

  const handleToggle = (index) => setActive(active === index ? null : index);

  return (
    <ul className="accordion-2">
      {items.map((item, index) => {
        return (
          <AccordionItem
            key={index}
            index={index}
            active={active}
            handleToggle={handleToggle}
            item={item}
          />
        );
      })}
    </ul>
  );
};
