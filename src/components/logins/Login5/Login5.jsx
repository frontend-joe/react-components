import "./styles.css";
import logo from "./logo.svg";

const Textbox = ({ placeholder, type, icon }) => (
  <div className="login-5-textbox">
    <i class={`ai-${icon}`} />
    <input type={type} placeholder={placeholder} autoComplete="off" />
  </div>
);

export const Login5 = () => {
  return (
    <section className="page login-5">
      <div className="login-5-background"></div>
      <div className="login-5-card">
        <img src={logo} />
        <h2>Welcome back!</h2>
        <form>
          <Textbox icon="envelope" type="email" placeholder="Email" />
          <Textbox icon="lock-on" type="password" placeholder="Password" />

          <button>Sign In</button>
          <a>Forgot password?</a>
        </form>
        <footer>
          Need an account? <a href="#">Sign up</a>
        </footer>
      </div>
    </section>
  );
};
