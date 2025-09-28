import { useState } from "react";
import logo from "./logo.png";
import blob from "./blob.svg";
import "./PasswordStrength2.css";

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
      <div className="textbox">
        <input
          name="password"
          spellCheck="false"
          className="password-strength"
          type="password"
          onChange={handleChange}
        />
        <label>{placeholder}</label>
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

export const PasswordStrength2Example = () => {
  const handleChange = (value) => console.log(value);

  return (
    <section className="page password-strength-2-page">
      <img src={blob} className="blob" />
      <div className="orbit"></div>
      <div className="card">
        <img src={logo} />
        <h2>Welcome to Lockr!</h2>
        <h3>We keep your data locked!</h3>
        <form>
          <div className="textbox">
            <input required type="text" />
            <label>Email</label>
          </div>
          <PasswordStrength placeholder="Password" onChange={handleChange} />
          <button type="submit">Sign Up</button>
        </form>
        <a>Privacy Policy</a>
        <p className="footer">
          Already have an account? <a>Login!</a>
        </p>
      </div>
    </section>
  );
};
