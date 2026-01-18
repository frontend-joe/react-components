import "./Sidebar15.css";
import logo from "./logo.svg";

const leftTopItems = [
  "ai-home-alt1",
  "ai-heart",
  "ai-mention",
  "ai-chat-dots",
  "ai-plus",
];

const leftBottomItems = ["ai-gear", "ai-link-out"];

const navItems = [
  { icon: "ai-dashboard", label: "Dashboard" },
  { icon: "ai-shipping-box-v1", label: "Products" },
  { icon: "ai-person", label: "Customers" },
  {
    icon: "ai-open-envelope",
    label: "Messages",
    actionIcon: "ai-plus",
    submenu: [
      { label: "Drafts", count: 10 },
      { label: "Scheduled", count: 4 },
      { label: "Published", count: 20 },
    ],
  },
  { icon: "ai-image", label: "Images" },
  { icon: "ai-network", label: "Network" },
  { icon: "ai-data", label: "Inventory" },
  { icon: "ai-hashtag", label: "Hashtags" },
];

const IconButton = ({ icon }) => (
  <button>
    <i className={icon}></i>
  </button>
);

const LeftSidebar = () => (
  <div className="left">
    <img src={logo} alt="Logo" />

    {leftTopItems.map((icon) => (
      <IconButton key={icon} icon={icon} />
    ))}

    <div>
      {leftBottomItems.map((icon) => (
        <IconButton key={icon} icon={icon} />
      ))}
    </div>
  </div>
);

const SidebarHeader = () => (
  <div className="header">
    <div>
      <h2>Untitled UI</h2>
      <h3>store.untitledui.com</h3>
    </div>
    <i className="ai-chevron-vertical"></i>
  </div>
);

const Submenu = ({ items }) => (
  <ul className="submenu">
    {items.map((item) => (
      <li key={item.label}>
        {item.label}
        <span className="badge">{item.count}</span>
      </li>
    ))}
  </ul>
);

const NavItem = ({ item }) => (
  <>
    <button>
      <i className={item.icon}></i>
      <span>{item.label}</span>
      {item.actionIcon && <i className={item.actionIcon}></i>}
    </button>

    {item.submenu && <Submenu items={item.submenu} />}
  </>
);

const Navigation = () => (
  <nav>
    {navItems.map((item) => (
      <NavItem key={item.label} item={item} />
    ))}
  </nav>
);

const RightSidebar = () => (
  <div className="right">
    <div className="right-inner">
      <SidebarHeader />
      <Navigation />
    </div>
  </div>
);

export const Sidebar15 = () => {
  return (
    <section className="page sidebar-15-page">
      <aside className="sidebar-15">
        <LeftSidebar />
        <RightSidebar />
      </aside>
    </section>
  );
};
