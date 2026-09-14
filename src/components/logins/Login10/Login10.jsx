import { useState } from "react";
import google from "./google.svg";
import facebook from "./facebook.svg";
import apple from "./apple.svg";
import "./Login10.css";

const Socials = () => (
  <>
    <span className="or">Or Sign in with</span>
    <div className="socials">
      <button type="button" className="social-btn">
        <img src={facebook} alt="Facebook" />
      </button>
      <button type="button" className="social-btn">
        <img src={google} alt="Google" />
      </button>
      <button type="button" className="social-btn">
        <img src={apple} alt="Apple" />
      </button>
    </div>
  </>
);

const PasswordField = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="password-field">
      <input type={show ? "text" : "password"} placeholder="••••••••" />
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
    <h2>Sign Up</h2>
    <form>
      <label>Name</label>
      <input type="text" placeholder="Joe Bloggs" />
      <label>Email</label>
      <input type="email" placeholder="hello@example.com" />
      <label>Password</label>
      <PasswordField />
      <button type="submit">Sign Up</button>
      <Socials />
    </form>
  </div>
);

const LoginForm = () => (
  <div className="form login">
    <h2>Login</h2>
    <form>
      <label>Email</label>
      <input type="email" placeholder="hello@example.com" />
      <label>Password</label>
      <PasswordField />
      <div className="remember-forgot">
        <label className="remember">
          <input type="checkbox" defaultChecked />
          <span>Remember me</span>
        </label>
        <a className="forgot">Forget password?</a>
      </div>
      <button type="submit">Login</button>
      <Socials />
    </form>
  </div>
);

export const Login10 = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <section className="page login-10">
      <div className={`card ${isRegister ? "register" : ""}`}>
        <div className="card-bg"></div>

        <Hero
          variant="register"
          title="Welcome back"
          text="Login to review your latest profit from investments."
          buttonLabel="Login"
          onSwitch={() => setIsRegister(false)}
        />
        <RegisterForm />

        <Hero
          variant="login"
          title="Hello there"
          text="Begin your journey using this software, and start earning now."
          buttonLabel="Sign Up"
          onSwitch={() => setIsRegister(true)}
        />
        <LoginForm />
      </div>
    </section>
  );
};
