import { useState } from "react";
import "./Password.css";

export const Icon = ({ children }) => (
  <span className="material-symbols-outlined">{children}</span>
);

export const Password = ({ name, onInput }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleInput = (e) => onInput(name, e.target.value);

  return (
    <div className="password-control">
      <input
        onInput={handleInput}
        type={showPassword ? "text" : "password"}
        required
      />
      <label>{name}</label>
      <Icon>lock</Icon>
      <button type="button" onMouseDown={handleMouseDown}>
        <Icon>{showPassword ? "visibility_off" : "visibility"}</Icon>
      </button>
      <div className="border" />
    </div>
  );
};
