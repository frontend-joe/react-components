import { useRef, useState } from "react";
import "./Dropdown1.css";

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
      <span className="material-symbols-outlined">{icon || name}</span>
      {name}
      {hasSubItems && (
        <span className="chevron material-symbols-outlined">chevron_right</span>
      )}
    </button>
  );
};

const MenuItem = ({ name, icon, index, activeSubMenu, subItems, onClick }) => {
  const subMenuRef = useRef();
  const isActive = activeSubMenu === index;
  return (
    <>
      <MenuButton
        onClick={subItems ? onClick : () => null}
        name={name}
        icon={icon || name}
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

export const Dropdown1 = ({ items }) => {
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
    <div className={`dropdown-1 ${isOpen ? "open" : ""}`}>
      <button onClick={() => setIsOpen(!isOpen)}>
        <span className="material-symbols-outlined"> account_circle </span>
        Joe Harrison
        <span className="chevron material-symbols-outlined"> expand_more </span>
      </button>
      <div
        style={{ height: `${subMenuHeight || 168}px` }}
        className="dropdown-1-menu"
      >
        <div className={`menu-inner ${isSubMenuOpen ? "open" : ""}`}>
          <div className="main-menu">
            {items.map((item, index) => (
              <MenuItem
                key={item.name}
                name={item.displayName || item.name}
                icon={item.name}
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
  );
};
