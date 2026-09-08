import logo from "./logo.svg";
import avatar from "./avatar.png";
import "./Card9.css";

export const Card9 = ({
  company,
  level,
  role,
  location,
  isRemote,
  salary,
  when,
  profileMatch,
  onShare,
  onSave,
}) => (
  <div className="card-9">
    <img src={logo} alt={company} />
    <div className="main">
      <h2>{company}</h2>
      <h3>{level}</h3>
      <h4>{role}</h4>
      <h5>
        {location} {isRemote && <em>(Remote)</em>}
      </h5>
    </div>
    <div className="details">
      <span className="salary">
        {salary}
        <em>/month</em>{" "}
      </span>
      <span className="date">{when}</span>
    </div>
    <div className="footer">
      <div className="badge">
        <img src={avatar} alt="profile" />
        <p>
          <em> {profileMatch}% </em>
          <span className="text"> profile match</span>
        </p>
      </div>
      <button onClick={onShare}>
        <span className="material-symbols-outlined"> share </span>
      </button>
      <button onClick={onSave}>
        <span className="material-symbols-outlined"> bookmark </span>
      </button>
    </div>
  </div>
);
