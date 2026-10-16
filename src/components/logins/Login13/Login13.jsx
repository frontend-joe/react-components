import { useState } from "react";
import google from "./google.svg";
import GradientWaves from "./GradientWaves";
import "./Login13.css";

const Control = ({ icon, type = "text", placeholder }) => (
  <div className="control">
    <i className={icon}></i>
    <input type={type} placeholder={placeholder} autoComplete="off" />
  </div>
);

const PasswordControl = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="control">
      <i className="ai-lock-on"></i>
      <input type={show ? "text" : "password"} placeholder="Password" />
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
      <PasswordControl />
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
      <PasswordControl />
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

export const Login13 = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <section className="page login-13">
      <div className="page-bg">
        <GradientWaves
          horizonColor="#cfd5dd"
          waveColor="#afb6c2"
          crestColor="#e0e4e9"
          amplitude={2.8}
          fogDepth={34}
          brightness={1.1}
          opacity={1}
          mouseInteraction={false}
          grain={false}
        />
      </div>

      <div className={`card ${isRegister ? "register" : ""}`}>
        <div className="card-bg">
          <GradientWaves
            horizonColor="#032b38"
            waveColor="#14a3c4"
            crestColor="#7fdcef"
            amplitude={3.2}
            fogDepth={22}
            brightness={0.9}
          />
        </div>

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
