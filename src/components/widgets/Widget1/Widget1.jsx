import { createRef, useEffect, useState } from "react";
import "./styles.css";

const buttonWidth = 56;
const tabWidth = 300;

const tabs = [
  {
    title: "Home",
    icon: "home",
    content:
      "Some information inside the tab widget, that will auto resize it's height.",
  },
  {
    title: "Settings",
    icon: "settings",
    content:
      "Some information inside the tab widget, that will auto resize it's height. This one has extra information so is a bit taller. Let's add one more sentence to see it's height grow even more!",
  },
  {
    title: "Account",
    icon: "lock",
    content:
      "Some information inside the tab widget, that will auto resize it's height. This one has extra information so is a bit taller. ",
  },
];

const WidgetHeader = ({ onClick, activeIndex }) => {
  return (
    <header>
      {tabs.map((tab, index) => (
        <button
          onClick={() => onClick(index)}
          key={tab.title}
          className={`material-symbols-outlined ${
            activeIndex === index ? "active" : ""
          }`}
        >
          {tab.icon}
        </button>
      ))}
      <div
        className="underline"
        style={{
          translate: `${activeIndex ? activeIndex * buttonWidth : 0}px 0`,
        }}
      ></div>
    </header>
  );
};

const WidgetTab = ({ tabRef, title, content }) => {
  return (
    <div ref={tabRef}>
      <h2>{title}</h2>
      <p>{content} </p>
    </div>
  );
};

export const Widget1 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [height, setHeight] = useState(140);

  const [refs, setRefs] = useState([]);

  const handleClick = (index) => {
    setActiveIndex(index);
    setHeight(refs[index].current.clientHeight);
  };

  useEffect(() => {
    setRefs(tabs.map(() => createRef()));
  }, []);

  useEffect(() => {
    if (!refs.length) return;
    setHeight(refs[0].current.clientHeight);
  }, [refs.length]);

  return (
    <article className="widget">
      <WidgetHeader onClick={handleClick} activeIndex={activeIndex} />
      <div className="content" style={{ height: `${height}px` }}>
        <div
          className="content-inner"
          style={{
            translate: `-${activeIndex ? activeIndex * tabWidth : 0}px 0`,
          }}
        >
          {tabs.map((tab, index) => (
            <WidgetTab
              key={tab.title}
              tabRef={refs[index]}
              title={tab.title}
              content={tab.content}
            />
          ))}
        </div>
      </div>
    </article>
  );
};

export const Widget1Example = () => (
  <section className="page widget-1-page">
    <Widget1 />
  </section>
);
