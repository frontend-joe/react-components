import { useRef, useState } from "react";
import logo from "./logo.svg";
import "./styles.css";

const navItems = ["home", "settings", "backup", "mail", "cloud"];

export const Sidebar5 = () => {
  const [width, setWidth] = useState(60);
  const sidebarRef = useRef(null);
  const sidebar = sidebarRef.current;

  const resize = (e) => {
    let newWidth = e.clientX - sidebar?.offsetLeft;
    if (newWidth < 11) newWidth = 10;
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
              <span className="material-symbols-outlined">menu</span>
            </button>
            <img src={logo} className="sidebar-logo" />
          </header>
          <nav className="sidebar-menu">
            {navItems.map((item) => (
              <button key={item} type="button" className="sidebar-button">
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
