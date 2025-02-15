import { useState } from "react";
import "./Table2.css";

const TableHeader = ({ column, onSort, sortOrder, sortColumn }) => {
  const isActive = column === sortColumn;
  return (
    <th className={isActive ? "active" : ""} onClick={() => onSort(column)}>
      {column}
      {isActive && (
        <i
          className={`fa-solid fa-arrow-${sortOrder === "asc" ? "up" : "down"}`}
        />
      )}
    </th>
  );
};

export const Table2 = ({ rows, columns }) => {
  const [sortColumn, setSortColumn] = useState(columns[0]);
  const [sortOrder, setSortOrder] = useState("asc");

  const sortedRows = rows.sort((a, b) => {
    const [valA, valB] = [a[sortColumn], b[sortColumn]];
    return typeof valA === typeof valB
      ? sortOrder === "asc"
        ? valA > valB
          ? 1
          : -1
        : valA < valB
        ? 1
        : -1
      : 0;
  });

  const handleSort = (column) => {
    console.log("name", column);
    setSortColumn(column);
    setSortOrder(
      sortColumn !== column ? "asc" : sortOrder === "asc" ? "desc" : "asc"
    );
  };

  return (
    <table className="table-2">
      <thead>
        <tr>
          {columns.map((column) => (
            <TableHeader
              key={column}
              column={column}
              onSort={handleSort}
              sortColumn={sortColumn}
              sortOrder={sortOrder}
            />
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedRows.map((row) => (
          <tr>
            {columns.map((column) => (
              <td>{row[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
