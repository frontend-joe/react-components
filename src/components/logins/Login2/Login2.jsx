import "./styles.css";
import logo from "./logo.svg";
import signin from "./signin.svg";
import signup from "./signup.svg";
import { useState } from "react";

const SigninForm = () => (
  <form className="active">
    <p>
      Don't have an account? <a>Sign Up</a>.
    </p>
    <label> Email </label>
    <div className="control">
      <input type="email" placeholder="youremail@gmail.com" />
      <i className="ai-envelope"></i>
    </div>
    <label> Password </label>
    <div className="control">
      <input type="password" placeholder="●●●●●●●●●●●●●●●" />
      <i className="ai-lock-on"></i>
    </div>
    <button>SIGN IN</button>
    <p className="footer">
      By clicking Sign In you agree to our terms and conditions, privacy policy
      and reusability rules.
    </p>
  </form>
);

const SignupForm = () => (
  <form>
    <p>
      Already have an account? <a>Sign In</a>.
    </p>
    <label> Username </label>
    <div className="control">
      <input type="text" placeholder="myusername" />
      <i className="ai-person"></i>
    </div>
    <label> Email </label>
    <div className="control">
      <input type="email" placeholder="youremail@gmail.com" />
      <i className="ai-envelope"></i>
    </div>
    <label> Password </label>
    <div className="control">
      <input type="password" placeholder="●●●●●●●●●●●●●●●" />
      <i className="ai-lock-on"></i>
    </div>
    <button>SIGN UP</button>
  </form>
);

const navButtons = [
  { name: "signin", label: "Sign In", icon: "check" },
  { name: "signup", label: "Sign Up", icon: "add" },
];

const NavButton = ({ onClick, isActive, label, icon }) => (
  <button
    type="button"
    className={`${isActive ? "active" : ""} `}
    onClick={onClick}
  >
    <i className={`ai-person-${icon}`} />
    <span>{label}</span>
  </button>
);

const CardForms = ({ view }) => (
  <div className="card-form">
    <div className="forms" style={{ top: view === "signin" ? 0 : "-100%" }}>
      <SigninForm />
      <SignupForm />
    </div>
  </div>
);

const CardHero = ({ view }) => (
  <div className="card-hero">
    <div
      className="card-hero-inner"
      style={{ top: view === "signin" ? 0 : "-100%" }}
    >
      <div className="card-hero-content signin">
        <h2>Welcome Back.</h2>
        <h3>Please enter your credentials.</h3>
        <img src={signin} />
      </div>
      <div className="card-hero-content signup">
        <h2>Join The Crowd.</h2>
        <h3>Sign up now and get started today.</h3>
        <img src={signup} />
      </div>
    </div>
  </div>
);

const CardNav = ({ view, toggleView }) => (
  <ul className="card-nav">
    <li>
      <img src={logo} />
      <span
        className="active-bar"
        style={{ top: view === "signin" ? "33.33%" : "66.66%" }}
      ></span>
    </li>
    {navButtons.map((btn) => (
      <li>
        <NavButton
          icon={btn.icon}
          label={btn.label}
          isActive={view === btn.name}
          onClick={toggleView}
        />
      </li>
    ))}
  </ul>
);

export const Login2 = () => {
  const [view, setView] = useState("signin");

  const toggleView = () => setView(view === "signin" ? "signup" : "signin");

  return (
    <section className="page login-2-page">
      <div className="login-2">
        <CardNav view={view} toggleView={toggleView} />
        <CardHero view={view} />
        <CardForms view={view} />
      </div>
    </section>
  );
};
