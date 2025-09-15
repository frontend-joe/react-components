import { Dropdown5 } from "./Dropdown5";
import joe from "./joe.png";
import logo from "./logo.svg";
import "./Dropdown5Example.css";

export const Dropdown5Example = () => {
  return (
    <section className="page dropdown-5-page">
      <nav className="dropdown-5-nav">
        <div className="logo">
          <span className="material-symbols-outlined"> menu </span>
          <img src={logo} />
          <h2>Drive</h2>
        </div>
        <div className="nav-right">
          <span className="material-symbols-outlined"> help </span>
          <span className="material-symbols-outlined"> settings </span>
          <Dropdown5 />
          <img src={joe} />
        </div>
      </nav>
    </section>
  );
};
