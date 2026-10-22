import { useEffect, useRef, useState } from "react";
import {
  Bell,
  Folder,
  Home,
  LayoutGrid,
  Lock,
  MapPin,
  Settings,
  ShoppingCart,
  Users,
} from "lucide-react";
import logoIcon from "./logo-icon.svg";
import logoText from "./logo-text.svg";
import "./Sidebar17.css";

const MIN_WIDTH = 56;
const MAX_WIDTH = 240;

const navItems = [
  { icon: Home, label: "Home" },
  { icon: LayoutGrid, label: "Apps" },
  { icon: Folder, label: "Files" },
  { icon: Lock, label: "Accounts" },
  { icon: Users, label: "Users" },
  { icon: MapPin, label: "Locations" },
  { icon: Bell, label: "Notifications" },
  { icon: ShoppingCart, label: "Products" },
  { icon: Settings, label: "Settings" },
];

export const Sidebar17 = () => {
  const sidebarRef = useRef(null);
  const resizingRef = useRef(false);
  const [width, setWidth] = useState(MAX_WIDTH);
  const [collapsed, setCollapsed] = useState(false);
  const [resizing, setResizing] = useState(false);
  const [toggling, setToggling] = useState(false);

  useEffect(() => {
    const onMove = (event) => {
      if (!resizingRef.current) return;
      const { left } = sidebarRef.current.getBoundingClientRect();
      let newWidth = event.clientX - left;
      newWidth = Math.max(MIN_WIDTH, Math.min(MAX_WIDTH, newWidth));
      setCollapsed(newWidth <= MIN_WIDTH);
      setWidth(newWidth);
    };

    const onUp = () => {
      if (!resizingRef.current) return;
      resizingRef.current = false;
      setResizing(false);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
    };
  }, []);

  const handleMouseDown = (event) => {
    event.preventDefault();
    resizingRef.current = true;
    setResizing(true);
  };

  const handleDoubleClick = () => {
    const willCollapse =
      sidebarRef.current.getBoundingClientRect().width > MIN_WIDTH;

    setToggling(true);
    setCollapsed(willCollapse);
    setWidth(willCollapse ? MIN_WIDTH : MAX_WIDTH);

    const onEnd = (event) => {
      if (event.target !== sidebarRef.current || event.propertyName !== "width")
        return;
      setToggling(false);
      sidebarRef.current.removeEventListener("transitionend", onEnd);
    };
    sidebarRef.current.addEventListener("transitionend", onEnd);
  };

  return (
    <section className={`page sidebar-17-page ${resizing ? "resizing" : ""}`}>
      <aside
        ref={sidebarRef}
        className={`sidebar-17 ${collapsed ? "collapsed" : ""} ${
          toggling ? "is-toggling" : ""
        }`}
        style={{ width: `${width}px` }}
      >
        <div
          className="handle"
          onMouseDown={handleMouseDown}
          onDoubleClick={handleDoubleClick}
        ></div>
        <div className="sidebar-inner">
          <header>
            <img className="logo-icon" src={logoIcon} alt="" />
            <img className="logo-text" src={logoText} alt="logo" />
          </header>
          <ul>
            {navItems.map(({ icon: Icon, label }) => (
              <li key={label}>
                <button type="button">
                  <Icon />
                  <p>{label}</p>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </section>
  );
};
