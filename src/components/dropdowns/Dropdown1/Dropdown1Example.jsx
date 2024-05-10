import { Dropdown1 } from "./Dropdown1";
import "./Dropdown1.css";

const items = [
  {
    name: "settings",
    subItems: ["analytics", "database", "terminal"],
  },
  {
    name: "devices",
    subItems: ["smartphone", "mouse", "keyboard", "headphones"],
  },
  {
    name: "lock",
    displayName: "Account",
  },
];

export const Dropdown1Example = () => {
  return (
    <section className="page dropdown-1-page">
      <nav className="dropdown-1-nav">
        <span className="material-symbols-outlined">menu</span>
        <h1>Dashboard</h1>
        <Dropdown1 items={items} />
      </nav>
    </section>
  );
};
