import { Table3 } from "./Table3";
import "./Table3Example.css";
import image from "./image.svg";

const Icon = ({ children }) => (
  <span className="material-symbols-outlined">{children}</span>
);

const columns = [
  <span className="page-3-id-header">
    Vehicle ID <Icon>arrow_downward</Icon>
  </span>,
  "progress",
  "status",
  "active",
  "",
];

const Progress = ({ progress }) => (
  <>
    <span
      style={{ "--width": `${progress}%` }}
      className="table-3-progress"
    ></span>
    {progress}%
  </>
);

const Status = ({ status }) => (
  <div className={`table-3-status ${status}`}>{status}</div>
);

export const Checkbox = ({ checked }) => (
  <label className="table-3-checkbox">
    <input type="checkbox" defaultChecked={checked} />
    <span className="table-3-checkbox-control" />
  </label>
);

const Id = ({ id }) => (
  <div className="table-3-id">
    <div className="table-3-id-img-wrapper">
      <img src={image} />
    </div>
    {id}
  </div>
);

const Switch = ({ checked }) => (
  <label className="table-3-switch">
    <input type="checkbox" checked={checked} />
    <span className="table-3-switch-control" />
  </label>
);

const More = () => <Icon>more_vert</Icon>;

const rows = [
  [
    <Checkbox />,
    <Id id="7439231" />,
    <Progress progress={100} />,
    <Status status="available" />,
    <Switch />,
    <More />,
  ],
  [
    <Checkbox />,
    <Id id="6542934" />,
    <Progress progress={50} />,
    <Status status="issue" />,
    <Switch checked />,
    <More />,
  ],
  [
    <Checkbox />,
    <Id id="9283741" />,
    <Progress progress={10} />,
    <Status status="busy" />,
    <Switch />,
    <More />,
  ],
  [
    <Checkbox />,
    <Id id="8473629" />,
    <Progress progress={75} />,
    <Status status="available" />,
    <Switch />,
    <More />,
  ],
  [
    <Checkbox />,
    <Id id="5627384" />,
    <Progress progress={20} />,
    <Status status="available" />,
    <Switch />,
    <More />,
  ],
  [
    <Checkbox />,
    <Id id="9283746" />,
    <Progress progress={95} />,
    <Status status="busy" />,
    <Switch />,
    <More />,
  ],
  [
    <Checkbox />,
    <Id id="2346785" />,
    <Progress progress={5} />,
    <Status status="issue" />,
    <Switch checked />,
    <More />,
  ],
  [
    <Checkbox />,
    <Id id="1827364" />,
    <Progress progress={30} />,
    <Status status="available" />,
    <Switch />,
    <More />,
  ],
  [
    <Checkbox />,
    <Id id="9993742" />,
    <Progress progress={85} />,
    <Status status="available" />,
    <Switch checked />,
    <More />,
  ],
  [
    <Checkbox />,
    <Id id="8374623" />,
    <Progress progress={40} />,
    <Status status="busy" />,
    <Switch />,
    <More />,
  ],
  [
    <Checkbox />,
    <Id id="3748293" />,
    <Progress progress={15} />,
    <Status status="issue" />,
    <Switch />,
    <More />,
  ],
  [
    <Checkbox />,
    <Id id="4738291" />,
    <Progress progress={90} />,
    <Status status="available" />,
    <Switch checked />,
    <More />,
  ],
  [
    <Checkbox />,
    <Id id="6782934" />,
    <Progress progress={55} />,
    <Status status="available" />,
    <Switch checked />,
    <More />,
  ],
  [
    <Checkbox />,
    <Id id="1829473" />,
    <Progress progress={25} />,
    <Status status="busy" />,
    <Switch />,
    <More />,
  ],
  [
    <Checkbox />,
    <Id id="5647382" />,
    <Progress progress={80} />,
    <Status status="issue" />,
    <Switch checked />,
    <More />,
  ],
  [
    <Checkbox />,
    <Id id="3829471" />,
    <Progress progress={35} />,
    <Status status="available" />,
    <Switch />,
    <More />,
  ],
  [
    <Checkbox />,
    <Id id="9182736" />,
    <Progress progress={45} />,
    <Status status="available" />,
    <Switch checked />,
    <More />,
  ],
  [
    <Checkbox />,
    <Id id="2938472" />,
    <Progress progress={70} />,
    <Status status="busy" />,
    <Switch checked />,
    <More />,
  ],
  [
    <Checkbox />,
    <Id id="4758392" />,
    <Progress progress={60} />,
    <Status status="issue" />,
    <Switch checked />,
    <More />,
  ],
  [
    <Checkbox />,
    <Id id="8374628" />,
    <Progress progress={88} />,
    <Status status="available" />,
    <Switch checked />,
    <More />,
  ],
];

export const Table3Example = () => {
  return (
    <section className="page table-3-page">
      <div>
        <header>
          <h2>
            Reservations
            <span className="material-symbols-outlined">info</span>
          </h2>
          <button className="button dropdown">
            Latest
            <Icon>keyboard_arrow_down</Icon>
          </button>
          <button className="button icon">
            <Icon>more_vert</Icon>
          </button>
        </header>
        <div className="card">
          <Table3 columns={columns} rows={rows} />
        </div>
      </div>
    </section>
  );
};
