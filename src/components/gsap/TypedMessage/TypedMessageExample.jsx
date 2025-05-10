import { TypedMessage } from "./TypedMessage";
import "./TypedMessageExample.css";
import image from "./image.jpg";
import logo from "./logo.svg";

export const TypedMessageExample = () => {
  return (
    <section
      className="typed-message-page"
      style={{ backgroundImage: `url(${image});` }}
    >
      <nav>
        <img src={logo} className="typed-message-logo" />
        <div className="typed-message-search">
          <span class="material-symbols-outlined">search</span>
          <input type="text" placeholder="e.g London, United Kingdom" />
        </div>
        <div className="typed-message-links">
          <span class="material-symbols-outlined">mail</span>
          <span class="material-symbols-outlined">notifications</span>
          <span class="material-symbols-outlined">menu</span>
        </div>
      </nav>
      <div className="typed-message-banner">
        <div className="typed-message-banner-content">
          <div className="typed-message-wrapper">
            <TypedMessage message="Explore the world with Travyl" />
          </div>
        </div>
      </div>
    </section>
  );
};
