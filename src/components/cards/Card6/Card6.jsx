import "./Card6.css";

export const Card6 = ({ name, role, tags, img, stats }) => {
  return (
    <div className="card-6">
      <div className="card-6-hero">
        <img src={img} />
        <button className="share-btn">
          <i className="ai-share-box"></i>
        </button>
      </div>
      <div className="card-6-content">
        <div>
          <h2>{name}</h2>
          <h3>{role}</h3>

          <ul className="tags">
            {tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
        <ul className="stats">
          {stats.map((stat, index) => (
            <li key={index}>{stat}</li>
          ))}
        </ul>
        <div className="actions">
          <button className="contact-btn">Get in touch</button>
          <button className="save-btn">
            <i className="ai-ribbon" />
          </button>
        </div>
      </div>
    </div>
  );
};
