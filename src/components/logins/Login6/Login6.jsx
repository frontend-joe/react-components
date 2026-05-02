import { useRef } from "react";
import "./styles.css";
import logo from "./logo.svg";
import googleIcon from "./google.svg";
import appleIcon from "./apple.svg";
import { useWebGLBackground } from "./useWebGLBackground";

const Textbox = ({ id, type, label }) => (
  <div className="login-6-textbox">
    <input autoComplete="off" required type={type} id={id} />
    <label htmlFor={id}>{label}</label>
  </div>
);

export const Login6 = () => {
  const canvasRef = useRef(null);
  useWebGLBackground(canvasRef);

  return (
    <section className="page login-6">
      <canvas ref={canvasRef} className="login-6-canvas" />
      <div className="login-6-card">
        <img src={logo} alt="logo" />
        <h3>Welcome back!</h3>
        <form className="login-6-form">
          <div className="login-6-socials">
            <button type="button" className="login-6-sso-btn">
              <img src={googleIcon} alt="Google" />
              <span>Google</span>
            </button>
            <button type="button" className="login-6-sso-btn">
              <img src={appleIcon} alt="Apple" />
              <span>Apple</span>
            </button>
          </div>
          <div className="login-6-or">or</div>
          <Textbox id="login-6-email" type="text" label="Email" />
          <Textbox id="login-6-password" type="password" label="Password" />
          <button type="submit">Login</button>
        </form>
        <a href="#">Forgot password?</a>
        <p className="login-6-footer">
          Don't have an account? <a href="#">Register here</a>
        </p>
      </div>
    </section>
  );
};
