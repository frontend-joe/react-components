import { Table1 } from "./Table1";
import "./Table1Example.css";
import logo from "./logo.svg";

const columns = [
  {
    name: "name",
    width: 130,
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
  {
    name: "Hannah White",
    age: 22,
    level: "Beginner",
    languages: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Isaac Rodriguez",
    age: 45,
    level: "Expert",
    languages: ["C", "C++", "Assembly"],
  },
  {
    name: "Julia Brown",
    age: 27,
    level: "Intermediate",
    languages: ["Swift", "Objective-C"],
  },
  {
    name: "Kevin Davis",
    age: 38,
    level: "Advanced",
    languages: ["Perl", "Python", "R"],
  },
  {
    name: "Laura Martinez",
    age: 30,
    level: "Advanced",
    languages: ["Java", "Groovy", "Bash"],
  },
];

export const Table1Example = () => {
  return (
    <>
      <aside className="table-1-sidebar">
        <div class="header">
          <img src={logo} />
          <h1>Violet AI</h1>
        </div>

        <nav>
          <a>
            <i class="ai-search"></i>
            <p>Search</p>
          </a>
          <a>
            <i class="ai-home"></i>
            <p>Home</p>
          </a>
          <a>
            <i class="ai-folder"></i>
            <p>Projects</p>
          </a>
          <a>
            <i class="ai-dashboard"></i>
            <p>Dashboard</p>
          </a>
          <a>
            <i class="ai-person"></i>
            <p>Team</p>
          </a>
          <a>
            <i class="ai-envelope"></i>
            <p>Support</p>
          </a>
          <a>
            <i class="ai-gear"></i>
            <p>Settings</p>
          </a>
        </nav>
      </aside>
      <section className="page table-1-page">
        <div className="table-1-card">
          <Table1 columns={columns} data={data} />
        </div>
      </section>
    </>
  );
};
