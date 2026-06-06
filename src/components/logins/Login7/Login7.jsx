import { useRef } from "react";
import logo from "./logo.svg";
import google from "./google.svg";
import apple from "./apple.svg";
import facebook from "./facebook.svg";
import { useWebGLBackground } from "./useWebGLBackground";
import "./Login7.css";

export const Login7 = () => {
  // const canvasRef = useRef(null);
  // useWebGLBackground(canvasRef);

  const hearts = Array.from({ length: 4 - 0 + 1 }, (_, i) => 0 + i);

  return (
    <section className="page login-7">
      <div className="login-7-card">
        <div className="login-7-hero">
          {hearts.map((heart) => (
            <svg
              className="heart"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
              x="0px"
              y="0px"
              width="101.7px"
              height="87.6px"
              viewBox="0 0 101.7 87.6"
              enable-background="new 0 0 101.7 87.6"
              xml:space="preserve"
            >
              <path
                d="M51,12.8c0-0.1-0.1-0.1-0.1-0.2c0,0.1-0.1,0.1-0.1,0.2C31-10.7,0,0.2,0,28.9c0,27.6,40.7,56.9,50.9,58.8
	c10.1-1.8,50.9-31.1,50.9-58.8C101.7,0.2,70.7-10.7,51,12.8z"
              />
            </svg>
          ))}
        </div>
        <form className="login-7-form">
          <img src={logo} alt="logo" />
          <h3>Login to your account</h3>
          <div className="login-7-socials">
            <button type="button" className="login-7-social-btn">
              <img src={google} alt="Google" />
              <p>
                <span className="login-7-extra-text">Login with</span> Google
              </p>
            </button>
            <button type="button" className="login-7-social-btn">
              <img src={facebook} alt="Facebook" />
              <p>
                <span className="login-7-extra-text">Login with</span> Facebook
              </p>
            </button>
          </div>
          <span className="login-7-or"></span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </section>
  );
};
