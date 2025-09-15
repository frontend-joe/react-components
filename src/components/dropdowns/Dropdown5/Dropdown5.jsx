import { useRef, useState, useEffect } from "react";
import "./Dropdown5.css";
import joe from "./joe.png";
import gemini from "./gemini.png";
import { createPortal } from "react-dom";

const Menu = ({ isOpen, dropdownRef, menuRef }) => {
  const rect = dropdownRef?.current?.getBoundingClientRect();
  const top = `${rect?.y + 64}px`;
  const left = `${rect?.x - menuRef?.current?.clientWidth + 40}px`;

  return (
    <div
      ref={menuRef}
      className={`dropdown-5-menu ${isOpen ? "open" : ""}`}
      style={{ top, left }}
    >
      <div className="dropdown-5-menu-inner">
        <button>
          <img src={joe} />
          <span>Account</span>
        </button>
        <button>
          <span style={{ backgroundPosition: "0 0" }}></span>
          <span>Drive</span>
        </button>
        <button>
          <span style={{ backgroundPosition: "0 -2415px" }}></span>
          <span>Gmail</span>
        </button>
        <button>
          <span style={{ backgroundPosition: "0 -3174px" }}></span>
          <span>YouTube</span>
        </button>
        <button>
          <img src={gemini} />
          <span>Gemini</span>
        </button>
        <button>
          <span style={{ backgroundPosition: "0 -1794px" }}></span>
          <span>Maps</span>
        </button>
        <button>
          <span></span>
          <span>Search</span>
        </button>
        <button>
          <span style={{ backgroundPosition: "0 -759px" }}></span>
          <span>Calendar</span>
        </button>
        <button>
          <span style={{ backgroundPosition: "0 -897px" }}></span>
          <span>Play</span>
        </button>
        <button>
          <span style={{ backgroundPosition: "0 -414px" }}></span>
          <span>News</span>
        </button>
        <button>
          <span style={{ backgroundPosition: "0 -966px" }}></span>
          <span>Photos</span>
        </button>
        <button>
          <span style={{ backgroundPosition: "0 -1104px" }}></span>
          <span>Meet</span>
        </button>
        <button>
          <span style={{ backgroundPosition: "0 -69px" }}></span>
          <span>Chat</span>
        </button>
        <button>
          <span style={{ backgroundPosition: "0 -2346px" }}></span>
          <span>Translate</span>
        </button>
        <button>
          <span style={{ backgroundPosition: "0 -1449px" }}></span>
          <span>Contacts</span>
        </button>
        <button>
          <span style={{ backgroundPosition: "0 -2070px" }}></span>
          <span>Ad Centre</span>
        </button>
        <button>
          <span style={{ backgroundPosition: "0 -1932px" }}></span>
          <span>Shopping</span>
        </button>
      </div>
    </div>
  );
};

export const Dropdown5 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={dropdownRef} className={`dropdown-5 ${isOpen ? "open" : ""}`}>
      <button
        className="material-symbols-outlined"
        onClick={() => setIsOpen(!isOpen)}
      >
        apps
      </button>
      {createPortal(
        <Menu isOpen={isOpen} dropdownRef={dropdownRef} menuRef={menuRef} />,
        document.body
      )}
    </div>
  );
};
