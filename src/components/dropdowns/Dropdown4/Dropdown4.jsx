import { useRef, useEffect, useState } from "react";
import "./Dropdown4.css";

// Example items

// const items = [
//   "Trainers",
//   "Joggers",
//   "Tracksuits"
// ]

const useClickOutside = (ref, callback) => {
  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};

export const Dropdown4 = ({ buttonText, items, onItemClick }) => {
  const dropdownRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => setIsOpen(!isOpen);

  const handleItemClick = (item) => {
    onItemClick(item);
    toggleIsOpen();
  };

  useClickOutside(dropdownRef, () => setIsOpen(false));

  return (
    <div className={`dropdown-4 ${isOpen ? "open" : ""}`} ref={dropdownRef}>
      <button onClick={toggleIsOpen}>
        <span className="button-inner">
          {buttonText}
          <span className="material-symbols-outlined">arrow_drop_down</span>
        </span>
      </button>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <button onClick={() => handleItemClick(item)}>
              <i class={`fa-brands fa-${item}`}></i>
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
