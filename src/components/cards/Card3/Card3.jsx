import logo from "./logo.svg";
import avatar from "./avatar.png";
import "./Card3.css";

export const Card3 = ({
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
  <div class="card-3">
    <img src={logo} />
    <div class="main">
      <h2>{company}</h2>
      <h3>{level}</h3>
      <h4>{role}</h4>
      <h5>
        {location} {isRemote && <em>(Remote)</em>}
      </h5>
    </div>
    <div class="details">
      <span class="salary">
        {" "}
        {salary}
        <em>/month</em>{" "}
      </span>
      <span class="date">{when}</span>
    </div>
    <div class="footer">
      <div class="badge">
        <img src={avatar} />
        <p>
          <em> {profileMatch}% </em>
          <span class="text"> profile match</span>
        </p>
      </div>
      <button onClick={onShare}>
        <span class="material-symbols-outlined"> share </span>
      </button>
      <button onClick={onSave}>
        <span class="material-symbols-outlined"> bookmark </span>
      </button>
    </div>
  </div>
);
