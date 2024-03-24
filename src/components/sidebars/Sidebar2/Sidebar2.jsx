import { useState } from "react";
import logo from "./logo.svg";
import "./styles.css";

const navItems = ["home", "settings", "build", "cloud", "mail", "bookmark"];

export const Sidebar2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="page sidebar-2-page">
      <aside className={`sidebar-2 ${isOpen ? "open" : ""}`}>
        <div className="inner">
          <header>
            <button
              type="button"
              className="sidebar-2-burger"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="material-symbols-outlined">
                {isOpen ? "close" : "menu"}
              </span>
            </button>
            <img src={logo} />
          </header>
          <nav>
            {navItems.map((item) => (
              <button key={item} type="button">
                <span className="material-symbols-outlined">{item}</span>
                <p>{item}</p>
              </button>
            ))}
          </nav>
        </div>
      </aside>
    </section>
  );
};
