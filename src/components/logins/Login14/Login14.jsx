import { useState } from "react";
import google from "./google.svg";
import "./Login14.css";

const Control = ({ icon, type = "text", placeholder }) => (
  <div className="control">
    <i className={icon}></i>
    <input type={type} placeholder={placeholder} autoComplete="off" />
  </div>
);

const Divider = () => (
  <div className="or">
    <span>Or</span>
  </div>
);

const GoogleButton = () => (
  <button type="button" className="google-btn">
    <img src={google} alt="" />
    Continue with Google
  </button>
);

const Legal = ({ action }) => (
  <p className="legal">
    By {action} the Qube.ai application, you are agreeing to the{" "}
    <a>Terms &amp; Conditions</a> and <a>Privacy Policy</a>.
  </p>
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
    <h2>Sign up</h2>
    <form>
      <Control icon="ai-envelope" type="email" placeholder="Email" />
      <Control icon="ai-lock-on" type="password" placeholder="Password" />
      <label className="agree">
        <input type="checkbox" />
        <span>I agree to the terms</span>
      </label>
      <button type="submit" className="submit">
        Sign up
      </button>
      <Divider />
      <GoogleButton />
      <Legal action="signing up for" />
    </form>
  </div>
);

const LoginForm = () => (
  <div className="form login">
    <h2>Login</h2>
    <form>
      <Control icon="ai-envelope" type="email" placeholder="Email" />
      <Control icon="ai-lock-on" type="password" placeholder="Password" />
      <label className="remember">
        <input type="checkbox" />
        <span>Remember me</span>
      </label>
      <button type="submit" className="submit">
        Login
      </button>
      <Divider />
      <GoogleButton />
      <Legal action="logging into" />
    </form>
  </div>
);

export const Login14 = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <section className={`page login-14 ${isRegister ? "register" : ""}`}>
      <div className="screen-bg"></div>

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
          buttonLabel="Sign up"
          onSwitch={() => setIsRegister(true)}
        />
        <LoginForm />
      </div>
    </section>
  );
};
