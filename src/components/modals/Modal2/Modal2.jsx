import { useState } from "react";
import "./styles.css";
import logo from "./logo.svg";

export const Modal2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <section className="page modal-2-page">
      <div
        className={`modal-2-overlay ${isOpen ? "open" : ""}`}
        onClick={toggleModal}
      >
        <div className="modal-2-modal">
          <header>
            <h2>Sign Up</h2>
            <h3>Try Hologram today</h3>
          </header>
          <form>
            <div className="textbox">
              <span class="material-symbols-outlined">account_circle</span>
              <input type="email" placeholder="Email" />
            </div>
            <div className="textbox">
              <span class="material-symbols-outlined">lock</span>
              <input type="password" placeholder="Password" />
            </div>
            <button
              className="signup-button"
              type="submit"
              onClick={toggleModal}
            >
              <p>Sign up free</p>
              <span className="material-symbols-outlined"> trending_flat </span>
            </button>
          </form>
          <p>No credit card information required</p>
        </div>
      </div>
      <footer className="modal-2-footer">
        <div className="container">
          <article>
            <h2>Try Hologram today.</h2>
            <button
              className="signup-button"
              type="button"
              onClick={toggleModal}
            >
              <p>Sign up free</p>
              <span className="material-symbols-outlined"> trending_flat </span>
            </button>
          </article>
          <section className="top">
            <img src={logo} />
            <ul>
              <li>
                <h3>Resources</h3>
                <a>Usage</a>
                <a>Docs</a>
                <a>Support</a>
                <a>Hardware</a>
              </li>
              <li>
                <h3>Pricing</h3>
                <a>Overview</a>
                <a>Flexible Data</a>
                <a>High Volume</a>
                <a>Enterprise</a>
              </li>
              <li>
                <h3>Developers</h3>
                <a>Forum</a>
                <a>Projects</a>
                <a>Open Source</a>
                <a>GitHub</a>
              </li>
              <li>
                <h3>Company</h3>
                <a>About Us</a>
                <a>Blog</a>
                <a>Partnerships</a>
                <a>Careers</a>
              </li>
            </ul>
          </section>
        </div>
      </footer>
    </section>
  );
};
