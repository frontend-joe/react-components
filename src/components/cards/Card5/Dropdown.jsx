import { useState } from "react";
import "./Dropdown.css";

export const Dropdown = ({ items, selectedItem, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (item) => {
    setIsOpen(false);
    onSelect(item);
  };

  return (
    <div className="card-5-dropdown">
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        {selectedItem}
        <i class="ai-chevron-down"></i>
      </button>
      <div className={`card-5-menu ${isOpen ? "open" : ""}`}>
        {items.map((item) => (
          <button
            className={selectedItem === item ? "active" : ""}
            type="button"
            onClick={() => handleSelect(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};
