import { useState } from "react";
import "./Navbar4.css";
import logo from "./logo.svg";

const navItems = [
  {
    name: "Docs",
  },
  {
    name: "Guides",
  },
  {
    name: "Demos",
    items: ["React", "Svelte", "Vue"],
  },
  {
    name: "Issues",
  },
];

const NavItem = ({ item, onHover }) => (
  <a class="item" onMouseEnter={onHover}>
    {item.name}
    {!!item.items && (
      <div class="dropdown">
        <div>
          {item.items.map((subItem) => (
            <a>{subItem}</a>
          ))}
        </div>
      </div>
    )}
  </a>
);

export const Navbar4 = () => {
  const [activeItem, setActiveItem] = useState(null);

  const onHover = (index) => setActiveItem(index);

  return (
    <section className="page navbar-4-page">
      <header className="navbar-4">
        <div className="end">
          <img src={logo} />
        </div>
        <nav>
          {navItems.map((item, index) => (
            <NavItem item={item} onHover={() => onHover(index)} />
          ))}
          <div
            class="underline"
            style={{ translate: activeItem === 0 ? 0 : `${activeItem * 100}%` }}
          ></div>
        </nav>
        <div className="end">
          <span>v1.0.2</span>
        </div>
      </header>
    </section>
  );
};
