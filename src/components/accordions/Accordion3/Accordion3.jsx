import { useState } from "react";
import "./Accordion3.css";

export const Accordion3 = ({ items }) => {
  const [active, setActive] = useState(0);

  const handleToggle = (index) => setActive(index);

  return (
    <section className="page accordion-3-page">
      <div
        className="bg"
        style={{ backgroundImage: `url(${items[active].image}` }}
      />
      <div className="accordion-3">
        {items.map((item, index) => {
          const isActive = active === index ? "active" : "";
          return (
            <div
              key={item.image}
              className={`accordion-3-item ${isActive}`}
              onClick={() => handleToggle(index)}
            >
              <img src={item.image} />
              <div className="content">
                <span className="icon material-symbols-outlined">
                  photo_camera
                </span>
                <div>
                  <h2>{item.header}</h2>
                  <p>{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
