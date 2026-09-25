import { useState } from "react";
import logo from "./logo.svg";
import google from "./google.svg";
import facebook from "./facebook.svg";
import apple from "./apple.svg";
import "./Login11.css";

const Socials = () => (
  <>
    <span className="or">Or sign in with</span>
    <div className="socials">
      <button type="button" className="social-btn">
        <img src={google} alt="Google" />
      </button>
      <button type="button" className="social-btn">
        <img src={facebook} alt="Facebook" />
      </button>
      <button type="button" className="social-btn">
        <img src={apple} alt="Apple" />
      </button>
    </div>
  </>
);

const PasswordControl = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="control">
      <input type={show ? "text" : "password"} placeholder="●●●●●●●●●●●●●●●" />
      <button
        type="button"
        className="eye"
        onClick={() => setShow((prev) => !prev)}
        aria-label={show ? "Hide password" : "Show password"}
      >
        <span className="material-symbols-outlined">
          {show ? "visibility" : "visibility_off"}
        </span>
      </button>
    </div>
  );
};

const CardNav = ({ view, onSelect }) => (
  <ul className="card-nav">
    <li>
      <img src={logo} alt="logo" />
      <span className="active-bar"></span>
    </li>
    <li>
      <button
        type="button"
        className={`signin ${view === "signin" ? "active" : ""}`}
        onClick={() => onSelect("signin")}
      >
        <i className="ai-person-check"></i>
        <span>Sign In</span>
      </button>
    </li>
    <li>
      <button
        type="button"
        className={`signup ${view === "signup" ? "active" : ""}`}
        onClick={() => onSelect("signup")}
      >
        <i className="ai-person-add"></i>
        <span>Sign Up</span>
      </button>
    </li>
  </ul>
);

const Hero = ({ variant, title, subtitle }) => (
  <div className={`card-hero-content ${variant}`}>
    <h2>{title}</h2>
    <h3>{subtitle}</h3>
    <a className="terms">
      Terms &amp; Conditions
      <i className="ai-download"></i>
    </a>
  </div>
);

const SignInForm = ({ onSwitch }) => (
  <form className="signin">
    <p>
      Don&apos;t have an account? <a onClick={onSwitch}>Sign Up</a>
    </p>
    <label>Email</label>
    <div className="control">
      <input type="text" autoComplete="off" placeholder="youremail@gmail.com" />
      <i className="ai-envelope"></i>
    </div>
    <label>Password</label>
    <PasswordControl />
    <div className="remember-forgot">
      <label className="remember">
        <input type="checkbox" defaultChecked />
        <span>Remember</span>
      </label>
      <a className="forgot">Forgot password?</a>
    </div>
    <button>Sign In</button>
    <Socials />
  </form>
);

const SignUpForm = ({ onSwitch }) => (
  <form className="signup">
    <p>
      Already have an account? <a onClick={onSwitch}>Sign In</a>
    </p>
    <label>Username</label>
    <div className="control">
      <input type="text" placeholder="myusername" />
      <i className="ai-person"></i>
    </div>
    <label>Email</label>
    <div className="control">
      <input type="text" autoComplete="off" placeholder="youremail@gmail.com" />
      <i className="ai-envelope"></i>
    </div>
    <label>Password</label>
    <PasswordControl />
    <button>Sign Up</button>
    <Socials />
  </form>
);

export const Login11 = () => {
  const [view, setView] = useState("signin");

  return (
    <section className="page login-11">
      <div className={`card ${view}`}>
        <CardNav view={view} onSelect={setView} />

        <div className="card-hero">
          <div className="card-hero-bg"></div>
          <div className="card-hero-inner">
            <Hero
              variant="signin"
              title="Welcome back"
              subtitle="Please enter your credentials"
            />
            <Hero
              variant="signup"
              title="Join us today"
              subtitle="Creating an account is quick"
            />
          </div>
        </div>

        <div className="card-form">
          <div className="forms">
            <SignInForm onSwitch={() => setView("signup")} />
            <SignUpForm onSwitch={() => setView("signin")} />
          </div>
        </div>
      </div>
    </section>
  );
};
