import { TypedMessage } from "./TypedMessage";
import "./TypedMessageExample.css";
import image from "./image.jpg";
import logo from "./logo.svg";
import video from "./video.mp4";

export const TypedMessageExample = () => {
  return (
    <section className="typed-message-page">
      <nav>
        <img src={logo} className="typed-message-logo" />
        <div className="typed-message-search">
          <span className="material-symbols-outlined">search</span>
          <input type="text" placeholder="e.g London, United Kingdom" />
        </div>
        <div className="typed-message-links">
          <span className="material-symbols-outlined">mail</span>
          <span className="material-symbols-outlined">notifications</span>
          <span className="material-symbols-outlined">menu</span>
        </div>
      </nav>
      <div className="typed-message-banner">
        <video autoPlay muted loop playsInline className="background-video">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="typed-message-banner-content">
          <div className="typed-message-wrapper">
            <TypedMessage message="Explore the world with Travyl" />
          </div>
        </div>
      </div>
      <div className="banner-overlay" />
    </section>
  );
};
