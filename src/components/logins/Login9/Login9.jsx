import logo from "./logo.svg";
import google from "./google.svg";
import facebook from "./facebook.svg";
import "./Login9.css";

export const Login9 = () => {
  return (
    <section className="page login-9">
      <div className="login-9-card">
        <div className="login-9-hero">
          <div className="ocean">
            <div className="wave"></div>
            <div className="wave"></div>
          </div>
        </div>
        <form className="login-9-form">
          <img src={logo} alt="logo" />
          <h3>Login to your account</h3>
          <div className="login-9-socials">
            <button type="button" className="login-9-social-btn">
              <img src={google} alt="Google" />
              <p>
                <span className="login-9-extra-text">Login with</span> Google
              </p>
            </button>
            <button type="button" className="login-9-social-btn">
              <img src={facebook} alt="Facebook" />
              <p>
                <span className="login-9-extra-text">Login with</span> Facebook
              </p>
            </button>
          </div>
          <span className="login-9-or"></span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </section>
  );
};
