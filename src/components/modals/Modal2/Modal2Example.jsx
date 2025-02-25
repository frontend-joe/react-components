import { useState } from "react";
import "./Modal2Example.css";
import { Modal2 } from "./Modal2";
import logo from "./logo.svg";

export const Modal2Example = () => {
  const [isOpen, setIsOpen] = useState(null);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <section className="page modal-2-page">
      <Modal2
        title="Sign Up"
        subtitle="Try Hologram today."
        isOpen={isOpen}
        toggleModal={toggleModal}
        modalContent={
          <>
            <form>
              <input autoComplete="off" type="email" placeholder="Email" />
              <input type="text" placeholder="Password" />
              <button className="signup-button" onClick={toggleModal}>
                <p>Sign up free</p>
                <span className="material-symbols-outlined">
                  {" "}
                  trending_flat{" "}
                </span>
              </button>
            </form>
            <p>No credit card information required</p>
          </>
        }
      />
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
