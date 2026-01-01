import { useRef, useState, useLayoutEffect } from "react";
import "./Sidebar13.css";
import logo from "./logo.svg";

const SIDEBAR_ITEMS = [
  { id: "dashboard", label: "Dashboard", icon: "grid-outline", type: "page" },
  {
    id: "create",
    label: "Create",
    icon: "document-text-outline",
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
    icon: "lock-closed-outline",
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
    icon: "person-outline",
    type: "submenu",
    children: [
      { id: "avatar", label: "Avatar" },
      { id: "theme", label: "Theme" },
    ],
  },
  {
    id: "notifications",
    label: "Notifications",
    icon: "notifications-outline",
    type: "page",
  },
  { id: "saved", label: "Favourites", icon: "heart-outline", type: "page" },
  { id: "products", label: "Products", icon: "cart-outline", type: "page" },
  { id: "settings", label: "Settings", icon: "settings-outline", type: "page" },
];

export const Sidebar13 = () => {
  const [activeItem, setActiveItem] = useState("dashboard");
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const handlePageClick = (id) => {
    setActiveItem(id);
    setOpenSubmenu(null);
  };

  const handleSubmenuToggle = (id) => {
    setActiveItem((prev) => (prev === id ? null : id));
    setOpenSubmenu((prev) => (prev === id ? null : id));
  };

  return (
    <section className="page sidebar-13-page">
      <aside className="sidebar-13">
        <header>
          <img src={logo} alt="Logo" />
        </header>
        <ul>
          {SIDEBAR_ITEMS.map((item) => (
            <SidebarItem
              key={item.id}
              item={item}
              activeItem={activeItem}
              isOpen={openSubmenu === item.id}
              onPageClick={handlePageClick}
              onSubmenuToggle={handleSubmenuToggle}
            />
          ))}
        </ul>
      </aside>
    </section>
  );
};

const SidebarItem = ({
  item,
  activeItem,
  isOpen,
  onPageClick,
  onSubmenuToggle,
}) => {
  const isActive = activeItem === item.id;

  return (
    <li>
      <button
        className={isActive ? "active" : ""}
        onClick={() =>
          item.type === "page" ? onPageClick(item.id) : onSubmenuToggle(item.id)
        }
      >
        <ion-icon name={item.icon} />
        <p>{item.label}</p>
        {item.type === "submenu" && (
          <ion-icon name="chevron-down-outline"></ion-icon>
        )}
      </button>

      {item.type === "submenu" && (
        <Submenu
          isOpen={isOpen}
          activeItem={activeItem}
          items={item.children}
        />
      )}
    </li>
  );
};

const Submenu = ({ isOpen, activeItem, items }) => {
  const listRef = useRef(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    if (listRef.current) {
      setHeight(listRef.current.getBoundingClientRect().height);
    }
  }, [items]);

  return (
    <div
      className="sub-menu"
      style={{ height: isOpen ? `${height}px` : "0px" }}
    >
      <ul ref={listRef}>
        {items.map((child) => (
          <li key={child.id}>
            <button className={activeItem === child.id ? "active" : ""}>
              {child.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
