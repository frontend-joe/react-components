import { useRef, useState } from "react";
import "./Table1.css";

const data = [
  {
    name: "Alice Johnson",
    age: 29,
    level: "Intermediate",
    languages: ["Python", "JavaScript", "HTML"],
  },
  {
    name: "Bob Smith",
    age: 35,
    level: "Advanced",
    languages: ["Java", "Kotlin", "Scala"],
  },
  {
    name: "Charlie Evans",
    age: 23,
    level: "Beginner",
    languages: ["Python", "C++"],
  },
  {
    name: "Diana Lee",
    age: 41,
    level: "Expert",
    languages: ["C#", "F#", "SQL"],
  },
  {
    name: "Edward Kim",
    age: 28,
    level: "Intermediate",
    languages: ["JavaScript", "TypeScript", "Node.js"],
  },
  {
    name: "Fiona Garcia",
    age: 32,
    level: "Advanced",
    languages: ["Ruby", "Go", "Elixir"],
  },
  {
    name: "Rachel Hernandez",
    age: 36,
    level: "Advanced",
    languages: ["C", "C++", "Go"],
  },
  {
    name: "Steve Cooper",
    age: 25,
    level: "Intermediate",
    languages: ["Python", "Ruby", "JavaScript"],
  },
  {
    name: "Tina Walker",
    age: 33,
    level: "Advanced",
    languages: ["Dart", "Flutter", "Kotlin"],
  },
];

export const Table1 = () => {
  const [columns, setColumns] = useState([
    {
      name: "name",
      width: 200,
    },
    {
      name: "age",
      width: 50,
    },
    {
      name: "level",
      width: 240,
    },
  ]);

  const wrapperRef = useRef(null);

  const activeIndex = useRef(null);

  const [resizeLineLeft, setResizeLineLeft] = useState(0);

  const resize = (e) => {
    setResizeLineLeft(
      e.clientX - wrapperRef.current.offsetLeft + wrapperRef.current.scrollLeft
    );
  };

  const stopResize = (e, index) => {
    document.body.style.cursor = "default";

    window.removeEventListener("mousemove", resize);
    window.removeEventListener("mouseup", stopResize);

    const columnsCopy = [...columns];

    const column = columnsCopy[activeIndex.current];

    // let nextWidth =
    //   e.clientX -
    //   e.target.offsetLeft -
    //   e.target.clientWidth -
    //   18 +
    //   wrapperRef.current.offsetLeft +
    //   wrapperRef.current.scrollLeft;
    // // if (newWidth < 61) newWidth = 60;

    let nextWidth = Math.abs(
      wrapperRef.current.offsetLeft +
        wrapperRef.current.scrollLeft -
        resizeLineLeft
    );

    console.log("stopResize", {
      e,
      index: activeIndex.current,
      clientX: e.clientX,
      wrapperScrollLeft: wrapperRef.current.scrollLeft,
      wrapperOffsetLeft: wrapperRef.current.offsetLeft,
      targetOffsetLeft: e.target.offsetLeft,
      targetClientWidth: e.target.clientWidth,
      nextWidth,
    });

    console.log(
      "guess",
      Math.abs(
        wrapperRef.current.offsetLeft +
          wrapperRef.current.scrollLeft -
          resizeLineLeft
      )
    );

    if (!column) return;

    column.width = nextWidth;

    console.log("columns", columnsCopy);

    setColumns(columnsCopy);
  };

  const initResize = (e, index) => {
    activeIndex.current = index;
    e.stopPropagation();
    document.body.style.cursor = "col-resize";
    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResize);
  };

  return (
    <section className="page table-1-page">
      <div className="table-1-card" ref={wrapperRef}>
        <div
          className="resize-line"
          style={{ left: `${resizeLineLeft}px` }}
        ></div>
        <table>
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th
                  key={column.name}
                  style={{
                    width: `${column.width}px`,
                    minWidth: `${column.width}px`,
                    maxWidth: `${column.width}px`,
                  }}
                >
                  {column.name}
                  <span
                    className="draggable"
                    onMouseDown={(e) => initResize(e, index)}
                  ></span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.name}>
                {columns.map((column) => (
                  <td key={column.name}>
                    <span className="cell-content"> {item[column.name]}</span>
                  </td>
                ))}
              </tr>
            ))}
            <tr></tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};
