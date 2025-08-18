import image from "./image.jpg";
import "./Card4.css";

export const Card4 = ({ name, role, bio, socials, onSocialClick }) => (
  <div className="card-4">
    <img src={image} />
    <div className="card-4-content">
      <h2>{name}</h2>
      <h3>{role}</h3>
      <p>{bio}</p>
      <div className="card-4-socials">
        {socials.map((social) => (
          <button key={social} onClick={() => onSocialClick(social)}>
            <i className={`fa-brands fa-${social}`}></i>
          </button>
        ))}
      </div>
    </div>
  </div>
);
