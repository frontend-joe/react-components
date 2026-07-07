import { useState } from "react";
import logo from "./logo.svg";
import avatar from "./avatar.png";
import "./Navbar5.css";

const items = [
  {
    name: "Biography",
    items: ["About", "Early Life", "Education"],
  },
  {
    name: "Projects",
    items: ["Chatbot", "Calculator", "Weather"],
  },
  {
    name: "Portfolio",
    items: ["Projects", "Testimonials", "GitHub"],
  },
  {
    name: "Contact",
  },
];

export const Navbar5 = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [submenuItem, setSubmenuItem] = useState(null);
  const [translateX, setTranslateX] = useState("0");

  const isOpen = Boolean(activeItem?.items?.length);

  const handleHover = (item, event) => {
    setActiveItem(item);
    if (!item.items?.length) return;
    setSubmenuItem(item);
    const rect = event.currentTarget.getBoundingClientRect();
    setTranslateX(`${rect.x}px`);
  };

  return (
    <section className="page navbar-5-page">
      <nav className="navbar-5">
        <img className="logo" src={logo} alt="logo" />
        <div className="menu" onMouseLeave={() => setActiveItem(null)}>
          <ul>
            {items.map((item) => (
              <li
                key={item.name}
                onMouseEnter={(event) => handleHover(item, event)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <img className="avatar" src={avatar} alt="avatar" />
      </nav>
      <div
        style={{ translate: `${translateX} 0` }}
        className={`submenu ${isOpen ? "open" : ""}`}
        onMouseEnter={() => setActiveItem(submenuItem)}
        onMouseLeave={() => setActiveItem(null)}
      >
        {items.map((item) => (
          <div
            key={item.name}
            className={item.name === submenuItem?.name ? "visible" : ""}
          >
            <ul>
              {item.items?.map((link) => (
                <li key={link}>{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
