import { useRef, useState } from "react";
import "./Sidebar10.css";

const blocks = [
  {
    name: "Hosting",
    icon: "storage",
    items: [
      { name: "Cloud", icon: "cloud" },
      { name: "DNS", icon: "dns" },
      { name: "API Keys", icon: "key" },
    ],
  },
  {
    name: "Storage",
    icon: "database",
    items: [
      { name: "Administration", icon: "build" },
      { name: "Management", icon: "hard_drive" },
    ],
  },
  {
    name: "Security",
    icon: "security",
    items: [
      { name: "Firewall", icon: "explosion" },
      { name: "Warnings", icon: "warning" },
      { name: "Alerts", icon: "dangerous" },
      { name: "Blocked", icon: "block" },
    ],
  },
  {
    name: "Profile",
    icon: "account_circle",
    items: [
      { name: "Account", icon: "lock" },
      { name: "Theme", icon: "palette" },
      { name: "Apps", icon: "apps" },
    ],
  },
];

const Icon = ({ children }) => (
  <span className="material-symbols-outlined">{children}</span>
);

const Button = ({ name, icon, isOpen, hasToggle, onClick }) => (
  <button type="button" onClick={onClick}>
    <Icon>{icon}</Icon>
    <p>{name}</p>
    {hasToggle && <Icon>{isOpen ? "remove" : "add"}</Icon>}
  </button>
);

const Block = ({ name, icon, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const itemsRef = useRef();

  return (
    <li className={`block ${isOpen ? "open" : ""}`}>
      <Button
        name={name}
        icon={icon}
        isOpen={isOpen}
        hasToggle
        onClick={() => setIsOpen(!isOpen)}
      />
      <div
        className="block-inner"
        style={{ height: isOpen ? itemsRef.current.clientHeight : 0 }}
      >
        <ul className="block-items" ref={itemsRef}>
          {items.map((item) => (
            <li>
              <Button name={item.name} icon={item.icon} />
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export const Sidebar10 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="page sidebar-10-page">
      <aside className={`sidebar-10 ${isOpen ? "open" : ""}`}>
        <h2 className="sidebar-10-header">
          <Icon>settings</Icon>
          <span>Settings</span>
        </h2>
        <ul className="blocks">
          {blocks.map((block) => (
            <Block name={block.name} icon={block.icon} items={block.items} />
          ))}
        </ul>
      </aside>
    </section>
  );
};
