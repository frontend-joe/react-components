import { useState } from "react";
import logo from "./logo.svg";
import "./styles.css";

const strengthLabels = ["weak", "medium", "medium", "strong"];

export const PasswordStrength = ({ placeholder, onChange }) => {
  const [strength, setStrength] = useState("");

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
      <input
        name="password"
        spellCheck="false"
        className="control"
        type="password"
        placeholder={placeholder}
        onChange={handleChange}
      />
      <div className={`bars ${strength}`}>
        <div></div>
      </div>
      <div className="strength">{strength && `${strength} password`}</div>
    </>
  );
};

export const PasswordStrengthExample = () => {
  const handleChange = (value) => console.log(value);

  return (
    <div className="page">
      <div className="login-card">
        <img src={logo} />
        <h2>Sign Up</h2>
        <form className="login-form">
          <div className="username">
            <input
              autoComplete="off"
              spellCheck="false"
              className="control"
              type="email"
              placeholder="Email"
              defaultValue="joe@gmail.com"
            />
            <div id="spinner" className="spinner"></div>
          </div>
          <PasswordStrength placeholder="Password" onChange={handleChange} />
          <button className="control" type="button">
            Join Now
          </button>
        </form>
      </div>
    </div>
  );
};
