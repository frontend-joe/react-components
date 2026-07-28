import "./Card8.css";

export const Card8 = ({ name, role, image, bio, tags }) => {
  return (
    <div className="card-8">
      <img className="image" src={image} alt={name} />
      <div className="content">
        <h2>{name}</h2>
        <h3>{role}</h3>
        <p>{bio}</p>
        <div className="footer">
          <div className="details">
            {tags.map((tag) => (
              <span className="item" key={tag}>
                <em>{tag}</em>
              </span>
            ))}
          </div>
          <div className="buttons">
            <button className="primary-btn">Hire now</button>
            <button className="icon-btn">
              <span className="material-symbols-outlined">favorite</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
