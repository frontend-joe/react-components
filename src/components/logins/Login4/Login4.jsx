import { useState } from "react";
import "./Login4.css";

const CardBackground = ({ activeView }) => {
  return <div className={`card-bg ${activeView === "login" ? "login" : ""}`} />;
};

const SocialButtons = () => {
  return (
    <div className="sso">
      <a className="fa-brands fa-facebook"></a>
      <a className="fa-brands fa-twitter"></a>
      <a className="fa-brands fa-linkedin"></a>
    </div>
  );
};

const HeroPanel = ({ type, activeView, title, text, buttonText, onToggle }) => {
  return (
    <div className={`hero ${type} ${activeView === type ? "active" : ""}`}>
      <h2>{title}</h2>
      <p>{text}</p>
      <button type="button" onClick={onToggle}>
        {buttonText}
      </button>
    </div>
  );
};

const RegisterForm = ({ activeView }) => {
  return (
    <div
      className={`form register ${activeView === "register" ? "active" : ""}`}
    >
      <h2>Sign Up</h2>
      <SocialButtons />
      <p>Or use your email address</p>

      <form>
        <input type="text" placeholder="Full name" />
        <input type="email" placeholder="Email address" />
        <input type="password" placeholder="Password" />
        <button>SIGN UP</button>
      </form>
    </div>
  );
};

const LoginForm = ({ activeView }) => {
  return (
    <div className={`form login ${activeView === "login" ? "active" : ""}`}>
      <h2>Login</h2>
      <SocialButtons />
      <p>Or use your email address</p>

      <form>
        <input type="text" placeholder="Email" />
        <input type="email" placeholder="Password" />
        <a style={{ paddingTop: 6, marginBottom: 7 }}>Forgot password?</a>
        <button>LOGIN</button>
      </form>
    </div>
  );
};

export const Login4 = () => {
  const [activeView, setActiveView] = useState("login");

  const toggleView = () => {
    setActiveView(activeView === "login" ? "register" : "login");
  };

  return (
    <section className="page login-4-page">
      <div className="login-4-card">
        <CardBackground activeView={activeView} />
        <HeroPanel
          type="register"
          activeView={activeView}
          title="Welcome back"
          text="Login to review your latest profit from investments."
          buttonText="LOGIN"
          onToggle={toggleView}
        />
        <RegisterForm activeView={activeView} />
        <HeroPanel
          type="login"
          activeView={activeView}
          title="Hello there"
          text="Begin your journey using this software, and start earning now."
          buttonText="SIGN UP"
          onToggle={toggleView}
        />
        <LoginForm activeView={activeView} />
      </div>
    </section>
  );
};
