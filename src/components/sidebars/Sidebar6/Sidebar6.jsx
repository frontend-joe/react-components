import { useState } from "react";
import logo from "./logo.svg";
import "./Sidebar6.css";

const navItems = [
  "dashboard",
  "leaderboard",
  "groups",
  "analytics",
  "message",
  "settings",
];

export const Sidebar6 = () => {
  const [active, setActive] = useState(1);

  const goto = (index) => setActive(index);

  return (
    <section className="page sidebar-6-page">
      <aside className="sidebar-6">
        <div className="inner">
          <div className="header">
            <img src={logo} className="logo" />
            <h1>Lampo</h1>
          </div>
          <nav
            className="menu"
            style={{ "--top": `${active === 0 ? 0 : active * 56}px` }}
          >
            {navItems.map((item, index) => (
              <button
                className={active === index ? "active" : ""}
                key={item}
                type="button"
                onClick={() => goto(index)}
              >
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
