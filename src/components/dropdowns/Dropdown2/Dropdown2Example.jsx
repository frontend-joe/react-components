import { Dropdown2 } from "./Dropdown2";
import joe from "./joe.png";
import logo from "./logo.svg";
import "./Dropdown2Example.css";

export const Dropdown2Example = () => {
  return (
    <section className="page dropdown-2-page">
      <nav className="dropdown-2-nav">
        <div className="logo">
          <span className="material-symbols-outlined"> menu </span>
          <img src={logo} />
          <h2>Joemail</h2>
        </div>
        <div className="nav-right">
          <span className="material-symbols-outlined"> help </span>
          <span className="material-symbols-outlined"> settings </span>
          <Dropdown2 />
          <img src={joe} />
        </div>
      </nav>
    </section>
  );
};
