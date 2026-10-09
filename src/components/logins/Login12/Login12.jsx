import { useState } from "react";
import logo from "./logo.svg";
import google from "./google.svg";
import github from "./github.svg";
import facebook from "./facebook.svg";
import "./Login12.css";

const Brand = () => (
  <div className="brand">
    <img src={logo} alt="Arcana" />
    <span>Arcana</span>
  </div>
);

const Field = ({ label, icon, type = "text", placeholder }) => (
  <div className="field">
    <span className="field-label">{label}</span>
    <div className="control">
      <span className="material-symbols-outlined">{icon}</span>
      <input type={type} placeholder={placeholder} autoComplete="off" />
    </div>
  </div>
);

const Socials = () => (
  <div className="socials">
    <button type="button" className="social-btn">
      <img src={google} alt="Google" />
    </button>
    <button type="button" className="social-btn">
      <img src={github} alt="GitHub" />
    </button>
    <button type="button" className="social-btn">
      <img src={facebook} alt="Facebook" />
    </button>
  </div>
);

const Hero = ({ variant, title, text, buttonLabel, onSwitch }) => (
  <div className={`hero ${variant}`}>
    <h2>{title}</h2>
    <p>{text}</p>
    <button type="button" className="switch" onClick={onSwitch}>
      {buttonLabel}
    </button>
  </div>
);

const RegisterForm = () => (
  <div className="form register">
    <Brand />
    <h2>Sign up</h2>
    <form>
      <Field label="Name" icon="person" placeholder="John Doe" />
      <Field
        label="Email Address"
        icon="mail"
        type="email"
        placeholder="Johndoe@gmail.com"
      />
      <Field
        label="Password"
        icon="lock_open"
        type="password"
        placeholder="••••••"
      />
      <button type="submit" className="submit">
        Sign up
      </button>
      <Socials />
    </form>
  </div>
);

const LoginForm = () => (
  <div className="form login">
    <Brand />
    <h2>Login</h2>
    <form>
      <Field
        label="Email Address"
        icon="mail"
        type="email"
        placeholder="Johndoe@gmail.com"
      />
      <Field
        label="Password"
        icon="lock_open"
        type="password"
        placeholder="••••••"
      />
      <label className="remember">
        <input type="checkbox" />
        <span>Remember me</span>
      </label>
      <p>Forgot your password?</p>
      <button type="submit" className="submit">
        Login
      </button>
      <Socials />
    </form>
  </div>
);

export const Login12 = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <section className="page login-12">
      <div className={`card ${isRegister ? "register" : ""}`}>
        <div className="card-bg"></div>

        <Hero
          variant="register"
          title="Welcome back"
          text="Sign in to manage your accounts and investments."
          buttonLabel="Login"
          onSwitch={() => setIsRegister(false)}
        />
        <RegisterForm />

        <Hero
          variant="login"
          title="Get started"
          text="Open an account and take control of your financial future."
          buttonLabel="Sign up"
          onSwitch={() => setIsRegister(true)}
        />
        <LoginForm />
      </div>
    </section>
  );
};
