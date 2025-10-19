import { useState } from "react";
import logo from "./logo.svg";
import "./Sidebar11.css";

const navItems = ["home", "build", "cloud", "stacks", "mail"];

export const Sidebar11 = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="page sidebar-11-page">
      <aside className={`sidebar-11 ${isOpen ? "open" : ""}`}>
        <div className="inner">
          <header>
            <button
              type="button"
              className="sidebar-11-burger"
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
            <button type="button">
              <span className="material-symbols-outlined">settings</span>
              <p>Settings</p>
            </button>
          </nav>
        </div>
      </aside>
    </section>
  );
};
