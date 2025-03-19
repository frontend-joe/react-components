import { useRef, useState } from "react";
import bg from "./bg.svg";
import "./Signup1.css";

const Icon = ({ children }) => (
  <span className="material-symbols-outlined">{children}</span>
);

const Password = ({ label, icon }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="textbox password">
      <input
        autoComplete="off"
        autoCorrect="off"
        type={showPassword ? "text" : "password"}
        required
      />
      <label>{label}</label>
      <Icon>{icon}</Icon>
      <button type="button" onClick={() => setShowPassword(!showPassword)}>
        <Icon>{showPassword ? "visibility_off" : "visibility"}</Icon>
      </button>
    </div>
  );
};

export const Signup1 = () => {
  return (
    <section className="page signup-1-page">
      <img className="signup-1-clouds" src={bg} />
      <div className="signup-1">
        <h2>Login</h2>
        <h3>Welcome back!</h3>
        <form>
          <Password label="Password" icon="lock" />
          <button>
            Login
            <Icon>arrow_forward</Icon>
          </button>
        </form>
      </div>
    </section>
  );
};
