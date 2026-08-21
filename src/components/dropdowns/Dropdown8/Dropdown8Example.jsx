import logo from "./logo.svg";
import joe from "./joe.png";
import { Dropdown8 } from "./Dropdown8";
import "./Dropdown8Example.css";

export const Dropdown8Example = () => {
  return (
    <section className="page dropdown-8-page">
      <nav className="dropdown-8-nav">
        <div className="logo">
          <button className="nav-icon material-symbols-outlined" aria-label="Menu">
            menu
          </button>
          <img src={logo} alt="Joemail" />
          <h2>Joemail</h2>
        </div>
        <div className="nav-right">
          <button className="nav-icon material-symbols-outlined" aria-label="Help">
            help
          </button>
          <button className="nav-icon material-symbols-outlined" aria-label="Settings">
            settings
          </button>
          <Dropdown8 />
          <img className="avatar" src={joe} alt="Account" />
        </div>
      </nav>
    </section>
  );
};
