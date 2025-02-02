import { useState } from "react";
import logo from "./logo.svg";
import "./styles.css";

const navItems = ["home", "build", "cloud", "mail", "favorite"];

const Icon = ({ icon }) => (
  <span className="material-symbols-outlined">{icon}</span>
);

const Button = ({ item }) => (
  <button type="button">
    <Icon icon={item} />
    <p>{item}</p>
  </button>
);

const Header = () => (
  <header>
    <img src={logo} />
  </header>
);

export const Sidebar7 = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="page sidebar-7-page">
      <button
        type="button"
        className="sidebar-7-burger"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Icon icon={isOpen ? "menu_open" : "menu"} />
      </button>
      <aside className={`sidebar-7 ${isOpen ? "open" : ""}`}>
        <div className="inner">
          <Header />
          <nav>
            {navItems.map((item) => (
              <Button key={item} item={item} />
            ))}
            <Button item="Settings" />
          </nav>
        </div>
      </aside>
    </section>
  );
};
