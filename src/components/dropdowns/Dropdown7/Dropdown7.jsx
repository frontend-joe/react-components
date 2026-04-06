import { useRef, useState } from "react";
import "./Dropdown7.css";

const items = [
  {
    name: "Settings",
    icon: "ai-gear",
    subItems: [
      { name: "Inventory", icon: "ai-file" },
      { name: "Management", icon: "ai-folder" },
      { name: "Location", icon: "ai-check-in" },
    ],
  },
  {
    name: "Account",
    icon: "ai-lock-on",
    subItems: [
      { name: "Storage", icon: "ai-data" },
      { name: "Rewards", icon: "ai-gift" },
      { name: "Support", icon: "ai-chat-approve" },
      { name: "Shipping", icon: "ai-shipping-box-v1" },
    ],
  },
  { name: "Logout", icon: "ai-sign-out" },
];

const Icon = ({ icon, className = "" }) => (
  <i className={`ai ${icon} ${className}`} />
);

export const Dropdown7 = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);
  const subRef = useRef(null);

  const activeItem = items[active];
  const height = subRef.current?.clientHeight || 168;

  return (
    <section className="page dropdown-7-page">
      <div className={`dropdown-7 ${open ? "open" : ""}`}>
        <button onClick={() => setOpen((o) => !o)}>
          <Icon icon="ai-person" />
          Joseph Harrison
          <Icon icon="ai-chevron-down" className="chevron" />
        </button>
        <div className="menu" style={{ height }}>
          <div className={`menu-inner ${active !== null ? "open" : ""}`}>
            <div className="main-menu">
              {items.map((item, i) => (
                <button
                  key={item.name}
                  onClick={() => item.subItems && setActive(i)}
                >
                  <Icon icon={item.icon} />
                  {item.name}
                  {item.subItems && (
                    <Icon icon="ai-chevron-right" className="chevron" />
                  )}
                </button>
              ))}
            </div>
            {activeItem?.subItems && (
              <div ref={subRef} className="sub-menu open">
                <button onClick={() => setActive(null)}>
                  <Icon icon="ai-arrow-left" />
                  {activeItem.name}
                </button>
                {activeItem.subItems.map((sub) => (
                  <button key={sub.name}>
                    <Icon icon={sub.icon} />
                    {sub.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
