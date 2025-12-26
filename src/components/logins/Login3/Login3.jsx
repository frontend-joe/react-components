import { useState } from "react";
import "./Login3.css";

const SSOButtons = () => (
  <div className="sso">
    <a className="fa-brands fa-facebook" />
    <a className="fa-brands fa-twitter" />
    <a className="fa-brands fa-linkedin" />
  </div>
);

const Hero = ({ type, active, title, text, buttonText, onClick }) => (
  <div className={`hero ${type} ${active ? "active" : ""}`}>
    <h2>{title}</h2>
    <p>{text}</p>
    <button type="button" onClick={onClick}>
      {buttonText}
    </button>
  </div>
);

const AuthForm = ({ type, active, title, children }) => (
  <div className={`form ${type} ${active ? "active" : ""}`}>
    <h2>{title}</h2>
    <SSOButtons />
    <p>Or use your email address</p>
    <form>{children}</form>
  </div>
);

export const Login3 = () => {
  const [view, setView] = useState("signup");

  const isSignup = view === "signup";
  const toggleView = () => setView(isSignup ? "signin" : "signup");

  return (
    <section className="page login-3-page login-3">
      <div className="card">
        <div className="card-bg" style={{ translate: isSignup ? 0 : "100%" }} />

        <Hero
          type="signup"
          active={isSignup}
          title="Welcome Back!"
          text="Sign in to track your most recent investment gains."
          buttonText="SIGN IN"
          onClick={toggleView}
        />

        <AuthForm type="signup" active={isSignup} title="Create Account">
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>SIGN UP</button>
        </AuthForm>

        <Hero
          type="signin"
          active={!isSignup}
          title="Hey There!"
          text="Start your journey here and begin earning right away."
          buttonText="SIGN UP"
          onClick={toggleView}
        />

        <AuthForm type="signin" active={!isSignup} title="Sign In">
          <input type="text" placeholder="Email / Username" />
          <input type="password" placeholder="Password" />
          <a>Forgot password?</a>
          <button>SIGN IN</button>
        </AuthForm>
      </div>
    </section>
  );
};
