import { useState } from "react";
import "./styles.css";

const menuHeight = getComputedStyle(document.body).getPropertyValue(
  "--widget-2-menu-height"
);

const items = [
  {
    name: "Home",
    content:
      "Vivamus volutpat ipsum ac ipsum feugiat, vel molestie elit vestibulum. Donec luctus commodo dictum. Aenean in turpis erat. Vestibulum imperdiet nibh. Ipsum ac ipsum feugiat, vel molestie.",
  },
  {
    name: "Security",
    icon: "Encrypted",
    content:
      "Vivamus volutpat ipsum ac ipsum feugiat, vel molestie elit vestibulum. Donec luctus commodo dictum. Aenean in turpis erat. Vestibulum imperdiet nibh. Ipsum ac ipsum feugiat, vel molestie.",
  },
  {
    name: "Stacks",
    content:
      "Vivamus volutpat ipsum ac ipsum feugiat, vel molestie elit vestibulum. Donec luctus commodo dictum. Aenean in turpis erat. Vestibulum imperdiet nibh. Ipsum ac ipsum feugiat, vel molestie.",
  },
  {
    name: "Settings",
    content:
      "Vivamus volutpat ipsum ac ipsum feugiat, vel molestie elit vestibulum. Donec luctus commodo dictum. Aenean in turpis erat. Vestibulum imperdiet nibh. Ipsum ac ipsum feugiat, vel molestie.",
  },
];

export const Widget2 = () => {
  const [activeBlock, setActiveBlock] = useState(0);

  const toggleMenuBlock = (index) => setActiveBlock(index);

  return (
    <section className="page widget-2-page">
      <div className="widget-2-card">
        <div className="buttons">
          {items.map((item, index) => (
            <button
              key={item.name}
              className={index === activeBlock ? "active" : ""}
              onClick={() => toggleMenuBlock(index)}
            >
              <span className="material-symbols-outlined">
                {item.icon || item.name}
              </span>
              {item.name}
            </button>
          ))}
        </div>
        <div className="wrapper">
          <div
            className="content"
            style={{
              translate: `0 calc(0px - ${menuHeight} * ${activeBlock})`,
            }}
          >
            {items.map((item) => (
              <div key={item.name} className="block">
                <h2>{item.name}</h2>
                <p>{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
