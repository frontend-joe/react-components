import { useState } from "react";
import logo from "./logo.png";
import "./Sidebar4.css";

const navItems = [
  "home",
  "settings",
  "dashboard",
  "mail",
  "cloud",
  "workspaces",
];

export const Sidebar4 = () => {
  const [active, setActive] = useState(1);

  const goto = (index) => setActive(index);

  return (
    <section className="page sidebar-4-page">
      <aside className="sidebar-4">
        <div className="inner">
          <div className="header">
            <img src={logo} className="logo" />
            <h1>Teams.co</h1>
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
