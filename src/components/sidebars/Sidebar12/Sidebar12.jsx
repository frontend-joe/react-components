import { useRef, useState } from "react";
import "./Sidebar12.css";
import logo from "./logo.svg";

const SIDEBAR_ITEMS = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: "ai-dashboard",
    type: "page",
  },
  {
    id: "create",
    label: "Create",
    icon: "ai-folder-add",
    type: "submenu",
    children: [
      { id: "article", label: "Article" },
      { id: "document", label: "Document" },
      { id: "slides", label: "Slides" },
    ],
  },
  {
    id: "account",
    label: "Account",
    icon: "ai-lock-on",
    type: "submenu",
    children: [
      { id: "admin", label: "Admin" },
      { id: "display", label: "Display" },
      { id: "appearance", label: "Appearance" },
      { id: "preferences", label: "Preferences" },
    ],
  },
  {
    id: "profile",
    label: "Profile",
    icon: "ai-person",
    type: "submenu",
    children: [
      { id: "avatar", label: "Avatar" },
      { id: "theme", label: "Theme" },
    ],
  },
  {
    id: "notifications",
    label: "Notifications",
    icon: "ai-bell",
    type: "page",
  },
  {
    id: "products",
    label: "Products",
    icon: "ai-cart",
    type: "page",
  },
  {
    id: "settings",
    label: "Settings",
    icon: "ai-gear",
    type: "page",
  },
];

export const Sidebar12 = () => {
  const [activeItem, setActiveItem] = useState("dashboard");
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const submenuRefs = useRef({});

  const getSubmenuHeight = (id) => {
    const el = submenuRefs.current[id];
    if (!el) return 0;
    return el.getBoundingClientRect().height;
  };

  const handlePageClick = (id) => {
    setActiveItem(id);
    setOpenSubmenu(null);
  };

  const handleSubmenuToggle = (id) => {
    setActiveItem(id);
    setOpenSubmenu((prev) => (prev === id ? null : id));
  };

  return (
    <section className="page sidebar-12-page">
      <aside className="sidebar-12">
        <header>
          <img src={logo} alt="Logo" />
        </header>
        <ul>
          {SIDEBAR_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                className={activeItem === item.id ? "active" : ""}
                onClick={() =>
                  item.type === "page"
                    ? handlePageClick(item.id)
                    : handleSubmenuToggle(item.id)
                }
              >
                <i className={item.icon}></i>
                <p>{item.label}</p>
                {item.type === "submenu" && (
                  <i className="ai-chevron-down-small" />
                )}
              </button>
              {item.type === "submenu" && (
                <div
                  className="sub-menu"
                  style={{
                    height:
                      openSubmenu === item.id
                        ? `${getSubmenuHeight(item.id)}px`
                        : "0px",
                  }}
                >
                  <ul ref={(el) => (submenuRefs.current[item.id] = el)}>
                    {item.children.map((child) => (
                      <li key={child.id}>
                        <button
                          onClick={() => handlePageClick(child.id)}
                          className={activeItem === child.id ? "active" : ""}
                        >
                          {child.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
};
