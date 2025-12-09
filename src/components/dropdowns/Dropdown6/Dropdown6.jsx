import { useState, useRef, useEffect } from "react";
import "./Dropdown6.css";

const defaultItems = [
  "login",
  "card",
  "landing page",
  "dashboard",
  "hero section",
  "footer",
];

export const Dropdown6 = () => {
  const [items, setItems] = useState(defaultItems);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  const wrapperRef = useRef(null);
  const inputRef = useRef(null);

  const insertSearch = (query) => {
    if (!query.trim()) return;

    setItems((prev) => {
      const newItems = [...prev];

      for (let i = newItems.length - 1; i > 0; i--) {
        newItems[i] = newItems[i - 1];
      }

      newItems[0] = query.trim();
      return newItems;
    });
  };

  const handleSearch = () => {
    insertSearch(search);
    setSearch("");
  };

  const handleFocus = () => setOpen(true);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={`dropdown-6 ${open ? "open" : ""}`} ref={wrapperRef}>
      <input
        ref={inputRef}
        type="text"
        placeholder="What you looking for?"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onFocus={handleFocus}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />

      <button type="button" onClick={handleSearch}>
        <span className="material-symbols-outlined">search</span>
      </button>

      <div className="dropdown-menu">
        {items.map((item, index) => {
          const isDefault = defaultItems.includes(item);

          return (
            <div key={index} className="dropdown-item">
              <button type="button" className="item-btn">
                <span className="material-symbols-outlined item-icon">
                  {isDefault ? "search" : "schedule"}
                </span>
                {item}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
