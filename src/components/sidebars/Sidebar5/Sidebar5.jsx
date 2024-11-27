import { useRef, useState } from "react";
import logo from "./logo.svg";
import "./Sidebar5.css";

const items = [
  {
    name: "home",
    icon: "home-2",
  },
  {
    name: "favourites",
    icon: "heart",
  },
  {
    name: "products",
    icon: "cart-2",
  },
  {
    name: "testimonials",
    icon: "comment-1",
  },
  {
    name: "security",
    icon: "locked-2",
  },
  {
    name: "settings",
    icon: "gear-1",
  },
];

const Icon = ({ children }) => <i className={`lni lni-${children}`} />;

export const Sidebar5 = () => {
  const [width, setWidth] = useState(60);
  const sidebarRef = useRef(null);
  const sidebar = sidebarRef.current;

  const resize = (e) => {
    let newWidth = e.clientX - sidebar?.offsetLeft;
    if (newWidth < 60) newWidth = 60;
    if (newWidth > 259) newWidth = 260;
    setWidth(newWidth);
  };

  const stopResize = () => {
    document.body.style.cursor = "default";
    window.removeEventListener("mousemove", resize);
    window.removeEventListener("mouseup", stopResize);
  };

  const initResize = () => {
    document.body.style.cursor = "col-resize";
    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResize);
  };

  return (
    <section className="page sidebar-5-page">
      <aside
        ref={sidebarRef}
        style={{ width: `${width}px` }}
        className="sidebar-5"
      >
        <div className="handle" onMouseDown={initResize}></div>
        <div className="sidebar-inner">
          <header className="sidebar-header">
            <button type="button" className="sidebar-burger">
              <Icon>menu-hamburger-1</Icon>
            </button>
            <img src={logo} className="sidebar-logo" />
          </header>
          <nav className="sidebar-menu">
            {items.map((item) => (
              <button key={item.name} type="button" className="sidebar-button">
                <Icon>{item.icon}</Icon>
                <p>{item.name}</p>
              </button>
            ))}
          </nav>
        </div>
      </aside>
    </section>
  );
};
