import { useState } from "react";
import logo from "./logo.svg";
import "./Signup1.css";

const CardBackground = ({ view }) => {
  const bgClass = view === "login" ? "register" : "login";

  return (
    <>
      <div className={`card-bg card-bg-1 ${bgClass}`}></div>
      <div className={`card-bg card-bg-2 ${bgClass}`}></div>
    </>
  );
};

const LogoGroup = ({ logo }) => {
  return (
    <>
      <img className="logo logo-1" src={logo} alt="logo" />
      <img className="logo logo-2" src={logo} alt="logo" />
    </>
  );
};

const LoginForm = ({ view, toggleView }) => {
  return (
    <div className={`form login ${view === "login" ? "active" : ""}`}>
      <form>
        <h2>Login</h2>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <p>Forgot password?</p>
        <button>LOGIN</button>
        <a onClick={toggleView}>
          Don't have an account? <em>Register here</em>
        </a>
      </form>
    </div>
  );
};

const RegisterForm = ({ view, toggleView }) => {
  return (
    <div className={`form register ${view === "register" ? "active" : ""}`}>
      <form>
        <h2>Register</h2>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>REGISTER</button>
        <a onClick={toggleView}>
          Already have an account? <em>Login here</em>
        </a>
      </form>
    </div>
  );
};

export const Signup1 = () => {
  const [view, setView] = useState("login");

  const toggleView = () => setView(view === "login" ? "register" : "login");

  return (
    <section className="page signup-1-page">
      <div className="signup-1-card">
        <CardBackground view={view} />
        <LogoGroup logo={logo} />
        <LoginForm view={view} toggleView={toggleView} />
        <RegisterForm view={view} toggleView={toggleView} />
      </div>
    </section>
  );
};
