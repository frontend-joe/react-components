import { useState } from "react";
import logo from "./logo.svg";
import blob from "./blob.svg";
import "./PasswordStrength4.css";

const strengthLabels = ["weak", "medium", "medium", "strong"];

const EyeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeOffIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
    <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
    <line x1="2" x2="22" y1="2" y2="22" />
  </svg>
);

const PasswordStrength = ({ placeholder, id, onChange }) => {
  const [strength, setStrength] = useState("");
  const [visible, setVisible] = useState(false);

  const getStrength = (password) => {
    let strengthIndicator = -1;
    if (/[a-z]/.test(password)) strengthIndicator++;
    if (/[A-Z]/.test(password)) strengthIndicator++;
    if (/\d/.test(password)) strengthIndicator++;
    if (/[^a-zA-Z0-9]/.test(password)) strengthIndicator++;
    if (password.length >= 16) strengthIndicator++;
    return strengthLabels[strengthIndicator];
  };

  const handleChange = (event) => {
    setStrength(getStrength(event.target.value));
    onChange(event.target.value);
  };

  return (
    <>
      <div className="textbox">
        <input
          id={id}
          name="password"
          spellCheck="false"
          className="password-strength"
          type={visible ? "text" : "password"}
          onChange={handleChange}
          required
        />
        <label htmlFor={id}>{placeholder}</label>
        <button
          type="button"
          className="toggle-visibility"
          aria-label={visible ? "Hide password" : "Show password"}
          onClick={() => setVisible((v) => !v)}
        >
          {visible ? <EyeOffIcon /> : <EyeIcon />}
        </button>
      </div>
      <div>
        <div className={`bars ${strength}`}>
          <div></div>
        </div>
        <div className="strength">{strength && `${strength} password`}</div>
      </div>
    </>
  );
};

export const PasswordStrength4Example = () => {
  const handleChange = (value) => console.log(value);

  return (
    <section className="page password-strength-4-page">
      <img src={blob} className="blob" alt="" />
      <div className="orbit" aria-hidden="true"></div>
      <div className="card">
        <img src={logo} alt="Lockr logo" />
        <h2>Cube.ai</h2>
        <form>
          <div className="textbox">
            <input id="ps4-email" required type="email" autoComplete="email" />
            <label htmlFor="ps4-email">Email</label>
          </div>
          <PasswordStrength
            id="ps4-password"
            placeholder="Password"
            onChange={handleChange}
          />
          <button type="submit">Sign Up</button>
        </form>
        <p className="footer">
          Already have an account? <a href="#">Login!</a>
        </p>
      </div>
    </section>
  );
};
