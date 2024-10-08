import { useEffect, useRef, useState, createRef } from "react";
import "./Table1.css";

const TableHeader = ({ index, column, columnRef, initResize }) => {
  return (
    <th
      ref={columnRef}
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
  );
};

const ResizeLine = ({ wrapperRef, resizeLineLeft }) => (
  <div
    className="resize-line"
    style={{
      left: `${resizeLineLeft}px`,
      top: `${wrapperRef?.current?.offsetTop}px`,
      bottom: `${
        window.innerHeight -
        (wrapperRef?.current?.offsetTop + wrapperRef?.current?.clientHeight)
      }px`,
    }}
  ></div>
);

export const Table1 = ({ columns, data }) => {
  const [columnState, setColumnState] = useState(columns);
  const [columnRefs, setColumnRefs] = useState([]);
  const [isResizing, setIsResizing] = useState(false);
  const [resizeLineLeft, setResizeLineLeft] = useState(0);

  const wrapperRef = useRef(null);
  const activeIndex = useRef(null);

  const resize = (e) => {
    setIsResizing(true);
    setResizeLineLeft(e.clientX);
  };

  const stopResize = (e) => {
    setIsResizing(false);

    document.body.style.cursor = "default";

    window.removeEventListener("mousemove", resize);
    window.removeEventListener("mouseup", stopResize);

    const columnsCopy = [...columns];
    const column = columnsCopy[activeIndex.current];
    const columnRef = columnRefs[activeIndex.current];
    const nextWidth =
      e.clientX -
      columnRef.current.offsetLeft -
      (wrapperRef.current.offsetLeft - wrapperRef.current.scrollLeft);

    column.width = nextWidth;

    setColumnState(columnsCopy);
  };

  const initResize = (e, index) => {
    activeIndex.current = index;
    e.stopPropagation();
    document.body.style.cursor = "col-resize";
    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResize);
  };

  useEffect(() => {
    setColumnRefs(
      Array(columns.length)
        .fill()
        .map((_, i) => columnRefs[i] || createRef())
    );
  }, []);

  return (
    <div className="table-1-wrapper" ref={wrapperRef}>
      {isResizing && (
        <ResizeLine resizeLineLeft={resizeLineLeft} wrapperRef={wrapperRef} />
      )}
      <table>
        <thead>
          <tr>
            {columnState.map((column, index) => (
              <TableHeader
                key={column.name}
                index={index}
                column={column}
                columnRef={columnRefs[index]}
                initResize={initResize}
              />
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.name}>
              {columnState.map((column) => (
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
  );
};
