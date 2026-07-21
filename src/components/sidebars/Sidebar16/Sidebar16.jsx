import { useLayoutEffect, useRef, useState } from "react";
import {
  Bell,
  Calendar,
  ChevronDown,
  Home,
  Lock,
  Menu,
  Settings,
  ShoppingCart,
  Users,
} from "lucide-react";
import "./Sidebar16.css";
import logo from "./logo.svg";

const navItems = [
  { id: "home", icon: Home, label: "Home" },
  {
    id: "products",
    icon: ShoppingCart,
    label: "Products",
    submenu: ["Agents", "Anayltics", "Dashboards"],
  },
  {
    id: "schedule",
    icon: Calendar,
    label: "Schedule",
    submenu: ["Generation", "Management", "Suspension", "Alerts"],
  },
  {
    id: "people",
    icon: Users,
    label: "People",
    submenu: ["Users", "Contacts"],
  },
  { id: "notifications", icon: Bell, label: "Notifications" },
  { id: "account", icon: Lock, label: "Account" },
  { id: "settings", icon: Settings, label: "Settings" },
];

const NavItem = ({ item, isOpen, isActive, onToggle }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);
  const Icon = item.icon;

  useLayoutEffect(() => {
    if (!contentRef.current) return;
    setHeight(isOpen ? contentRef.current.getBoundingClientRect().height : 0);
  }, [isOpen]);

  return (
    <li>
      <button
        type="button"
        aria-expanded={item.submenu ? isOpen : undefined}
        aria-current={isActive ? "page" : undefined}
        onClick={onToggle}
      >
        <Icon size={16} />
        <p>{item.label}</p>
        {item.submenu && <ChevronDown size={18} />}
      </button>

      {item.submenu && (
        <div className="sub-menu" style={{ height }}>
          <ul ref={contentRef}>
            {item.submenu.map((label) => (
              <li key={label}>
                <button type="button">{label}</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

export const Sidebar16 = () => {
  const [openId, setOpenId] = useState(null);
  const [activeId, setActiveId] = useState(null);

  return (
    <section className="page sidebar-16-page">
      <aside className="sidebar-16">
        <header>
          <img src={logo} alt="logo" />
          <h1>qube.ai</h1>
          <Menu size={18} />
        </header>
        <ul>
          {navItems.map((item) => (
            <NavItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              isActive={activeId === item.id}
              onToggle={() => {
                setActiveId(item.id);
                setOpenId((prev) =>
                  !item.submenu || prev === item.id ? null : item.id,
                );
              }}
            />
          ))}
        </ul>
      </aside>
    </section>
  );
};
