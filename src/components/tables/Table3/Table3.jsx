import { useState } from "react";
import "./Table3.css";
import { Checkbox } from "./Table3Example";

const pageSize = 5;

const PaginatedTable = ({ pageNumber, totalPages, totalRows, goToPage }) => {
  return (
    <footer className="table-3-footer">
      <div className="table-3-pagination">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => goToPage(index + 1)}
            disabled={pageNumber === index + 1}
            className={pageNumber === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <p>
        Viewing{" "}
        <em>
          {pageNumber === 1 ? 1 : (pageNumber - 1) * pageSize + 1}-
          {pageNumber * pageSize}
        </em>{" "}
        of <em>{totalRows}</em> rows
      </p>
    </footer>
  );
};

export const Table3 = ({ columns, rows }) => {
  const [pageNumber, setPageNumber] = useState(1);

  const totalPages = Math.ceil(rows.length / pageSize);

  const paginateArray = (array, pageSize, pageNumber) => {
    return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
  };

  const goToPage = (page) => setPageNumber(page);

  return (
    <>
      <table className="table-3">
        <thead>
          <tr>
            <th>
              <Checkbox />
            </th>
            {columns.map((column, index) => (
              <th key={`column${index + 1}`}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginateArray(rows, pageSize, pageNumber).map((row, index) => (
            <tr key={`row${index + 1}`}>
              {row.map((control, index) => (
                <td key={`control${index + 1}`}>{control}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <PaginatedTable
        pageNumber={pageNumber}
        totalPages={totalPages}
        totalRows={rows.length}
        goToPage={goToPage}
      />
    </>
  );
};
