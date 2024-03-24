import "./styles.css";
import logo from "./logo.svg";

export const Login1 = () => {
  return (
    <section className="page login-1">
      <div className="login-1-background"></div>
      <div className="login-1-card">
        <img src={logo} />
        <h2>Welcome back</h2>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign In</button>
        </form>
        <footer>
          Need an account? Sign up <a href="#">here</a>
        </footer>
      </div>
    </section>
  );
};
