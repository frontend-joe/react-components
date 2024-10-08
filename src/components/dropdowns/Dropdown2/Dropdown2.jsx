import { useRef, useState } from "react";
import "./Dropdown2.css";
import joe from "./joe.png";
import { createPortal } from "react-dom";

const Overlay = ({ isOpen, onClick }) => (
  <div
    onClick={onClick}
    className={`dropdown-2-overlay ${isOpen ? "open" : ""}`}
  ></div>
);

const Menu = ({ isOpen, dropdownRef }) => {
  const menuRef = useRef(null);
  const rect = dropdownRef?.current?.getBoundingClientRect();
  const top = `${rect?.y + 60}px`;
  const left = `${rect?.x - menuRef?.current?.clientWidth + 40}px`;

  return (
    <div
      ref={menuRef}
      className={`dropdown-2-menu ${isOpen ? "open" : ""}`}
      style={{ top, left }}
    >
      <button>
        <img src={joe} />
        <span>Account</span>
      </button>
      <button>
        <span></span>
        <span>Search</span>
      </button>
      <button>
        <span style={{ backgroundPosition: "0 -1794px" }}></span>
        <span>Maps</span>
      </button>
      <button>
        <span style={{ backgroundPosition: "0 -3174px" }}></span>
        <span>YouTube</span>
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
        <span style={{ backgroundPosition: "0 -2415px" }}></span>
        <span>Gmail</span>
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
        <span style={{ backgroundPosition: "0 -1449px" }}></span>
        <span>Contacts</span>
      </button>
      <button>
        <span style={{ backgroundPosition: "0 0" }}></span>
        <span>Drive</span>
      </button>
      <button>
        <span style={{ backgroundPosition: "0 -759px" }}></span>
        <span>Calendar</span>
      </button>
      <button>
        <span style={{ backgroundPosition: "0 -2346px" }}></span>
        <span>Translate</span>
      </button>
      <button>
        <span style={{ backgroundPosition: "0 -966px" }}></span>
        <span>Photos</span>
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
  );
};

export const Dropdown2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  return (
    <div ref={dropdownRef} className={`dropdown-2 ${isOpen ? "open" : ""}`}>
      <button
        className="material-symbols-outlined"
        onClick={() => setIsOpen(true)}
      >
        apps
      </button>
      {createPortal(
        <Overlay isOpen={isOpen} onClick={() => setIsOpen(false)} />,
        document.body
      )}
      {createPortal(
        <Menu isOpen={isOpen} dropdownRef={dropdownRef} />,
        document.body
      )}
    </div>
  );
};
