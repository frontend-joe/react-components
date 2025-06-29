import { useState } from "react";
import logo from "./logo.svg";
import "./Sidebar9.css";

const navItems = ["home", "security", "build", "cloud", "mail", "settings"];

export const Sidebar9 = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="page sidebar-9-page">
      <aside className={`sidebar-9 ${isOpen ? "open" : ""}`}>
        <div className="inner">
          <header>
            <button
              type="button"
              className="sidebar-9-burger"
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
