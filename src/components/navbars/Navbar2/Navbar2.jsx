import { useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import avatar from "./avatar.png";
import "./Navbar2.css";

const items = [
  {
    name: "Explore",
    items: ["Following", "Popular", "Noteworthy"],
  },
  {
    name: "Talent",
    items: ["Browse", "Profiles", "Services", "Jobs"],
  },
  {
    name: "Blog",
    items: ["News", "Articles", "Community"],
  },
];

const Link = ({ item, isActive, onHover }) => {
  const linkRef = useRef();

  const handleHover = () => {
    const rect = linkRef.current.getBoundingClientRect();
    onHover(item, `${rect.x}px`);
  };

  return (
    <a
      className={isActive ? "active" : ""}
      ref={linkRef}
      onMouseEnter={handleHover}
    >
      {item.name}
    </a>
  );
};

const Search = () => (
  <div className="navbar-2-search">
    <input type="text" placeholder="What you looking for?" />
    <button type="button">
      <span className="material-symbols-outlined">search</span>
    </button>
  </div>
);

const CoolNav = ({ items }) => {
  const [translateX, setTranslateX] = useState("0");
  const [activeItem, setActiveItem] = useState(null);
  const [isHidden, setIsHidden] = useState(true);

  const handleLinkHover = (item, x) => {
    setActiveItem(item);
    setTranslateX(x);
  };

  const handleMouseEnter = () => {
    setIsHidden(false);
  };

  const handleMouseLeave = () => {
    setIsHidden(true);
  };

  return (
    <div
      className="navbar-2-menu"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {items.map((item, index) => (
        <Link
          key={item.name}
          isActive={item.name === activeItem?.name && !isHidden}
          item={item}
          index={index}
          onHover={handleLinkHover}
        />
      ))}
      <div
        style={{
          translate: `${translateX} 0`,
        }}
        className={`navbar-2-dropdown ${
          activeItem && !isHidden ? "visible" : ""
        }`}
      >
        {activeItem?.items?.map((link) => (
          <a key={link}>{link}</a>
        ))}
      </div>
    </div>
  );
};

export const Navbar2 = () => {
  return (
    <section className="page navbar-2-page">
      <nav className="navbar-2">
        <img src={logo} />

        <Search />

        <CoolNav items={items} />

        <img className="avatar" src={avatar} />
      </nav>
    </section>
  );
};
