import { useState } from "react";
import bg from "./bg.svg";
import "./PasswordVisibilityExample.css";
import { Icon, Password } from "./Password";

export const PasswordVisibilityExample = () => {
  const [state, setState] = useState({
    password: "",
  });

  const handleInput = (name, value) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <section className="page password-visibility-page">
      <img className="password-visibility-clouds" src={bg} />
      <div className="password-visibility">
        <h2>Login</h2>
        <h3>Welcome back Jack!</h3>
        <form>
          <Password onInput={handleInput} name="password" />
          <button disabled={!state.password.length}>
            Login
            <Icon>arrow_forward</Icon>
          </button>
        </form>
      </div>
    </section>
  );
};
