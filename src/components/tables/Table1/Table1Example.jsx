import { Table1 } from "./Table1";
import "./Table1Example.css";
import logo from "./logo.svg";

const columns = [
  {
    name: "name",
    width: 125,
  },
  {
    name: "age",
    width: 50,
  },
  {
    name: "level",
    width: 170,
  },
];

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
    name: "George Thompson",
    age: 26,
    level: "Intermediate",
    languages: ["PHP", "Python", "JavaScript"],
  },
];

export const Table1Example = () => {
  return (
    <section className="page table-1-page">
      <div className="table-1-card">
        <div className="header">
          <h2>Developers</h2>
          <button type="button">Download</button>
        </div>
        <Table1 columns={columns} data={data} />
      </div>
    </section>
  );
};
