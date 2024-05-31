import { useState } from "react";
import logo from "./logo.svg";
import "./styles.css";

const navItems = ["home", "settings", "build", "cloud", "mail"];

export const Sidebar3 = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="page sidebar-3-page">
      <aside className={`sidebar-3 ${isOpen ? "open" : ""}`}>
        <div className="inner">
          <header>
            <button
              type="button"
              className="sidebar-3-burger"
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
