import { useRef, useState } from "react";
import "./Dropdown3.css";

const items = [
  {
    name: "build",
    subItems: ["description", "folder", "article"],
  },
  {
    name: "devices",
    subItems: ["storage", "mouse", "keyboard", "headphones"],
  },
  {
    name: "logout",
  },
];

const Icon = ({ icon, className }) => (
  <span className={`${className} material-symbols-outlined`}>{icon}</span>
);

const MenuButton = ({
  name,
  icon,
  index,
  hasSubItems,
  subMenuHeight,
  onClick,
}) => {
  return (
    <button onClick={() => (onClick ? onClick(index, subMenuHeight) : null)}>
      <Icon icon={icon || name} />
      {name}
      {hasSubItems && <Icon icon="chevron_right" className="chevron" />}
    </button>
  );
};

const MenuItem = ({ name, index, activeSubMenu, subItems, onClick }) => {
  const subMenuRef = useRef(null);
  const isActive = activeSubMenu === index;
  return (
    <>
      <MenuButton
        onClick={subItems ? onClick : () => null}
        name={name}
        index={index}
        hasSubItems={Boolean(subItems)}
        subMenuHeight={subMenuRef.current?.clientHeight}
      />
      {subItems?.length && (
        <div ref={subMenuRef} className={`sub-menu ${isActive ? "open" : ""}`}>
          <>
            <MenuButton onClick={onClick} icon="arrow_back" name={name} />
            {subItems.map((subItem) => (
              <MenuButton key={subItem} name={subItem} />
            ))}
          </>
        </div>
      )}
    </>
  );
};

export const Dropdown3 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const [subMenuHeight, setSubMenuHeight] = useState();

  const [activeSubMenu, setActiveSubMenu] = useState();

  const handleClick = (index, subMenuHeight) => {
    if (index > -1) setActiveSubMenu(index);
    setSubMenuHeight(subMenuHeight);
    setIsSubMenuOpen(index > -1);
  };

  return (
    <section className="page dropdown-3-page">
      <div
        style={{ translate: "0 -50px" }}
        className={`dropdown-3 ${isOpen ? "open" : ""}`}
      >
        <button onClick={() => setIsOpen(!isOpen)}>
          <Icon icon="account_circle" />
          Kim Wilson
          <Icon className="chevron" icon="expand_more" />
        </button>
        <div style={{ height: `${subMenuHeight || 168}px` }} className="menu">
          <div className={`menu-inner ${isSubMenuOpen ? "open" : ""}`}>
            <div className="main-menu">
              {items.map((item, index) => (
                <MenuItem
                  key={item.name}
                  name={item.name}
                  index={index}
                  activeSubMenu={activeSubMenu}
                  onClick={handleClick}
                  subItems={item.subItems}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
