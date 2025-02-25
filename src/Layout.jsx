import { Link, useNavigate } from "react-router-dom";
import { routes } from "./routes";
import "./Layout.css";

export const Layout = () => {
  const sortedRoutes = routes.sort((a, b) => a.name.localeCompare(b.name));

  const navigate = useNavigate();

  return (
    <main className="layout">
      <header className="layout-header">
        <div className="content">
          <h2>
            {/* <i className="fa-solid fa-code" /> */}
            React Components
          </h2>
          <button type="button">
            <i
              className="fa-solid fa-gear"
              style={{
                fontSize: "12.5px",
                translate: "0 1px",
                marginRight: "1px",
              }}
            ></i>
            Settings
            <i className="fa-solid fa-angle-down"></i>
          </button>
        </div>
      </header>
      <div className="layout-card">
        <div className="layout-table-wrapper">
          <table className="layout-table">
            <thead>
              <th>Name</th>
            </thead>
            <tbody>
              {sortedRoutes.map((route) => (
                <tr onClick={() => navigate(route.path)} key={route.path}>
                  <td>
                    <Link to={route.path}>{route.name}</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};
