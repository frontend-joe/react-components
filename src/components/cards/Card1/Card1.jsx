import "./styles.css";

const cards = [
  {
    name: "summary",
    total: 21,
    description: "Due Tasks",
    footer: "Completed: 13",
    more: "More Information",
  },
  {
    name: "overdue",
    total: 17,
    description: "Projects",
    footer: "Yesterday: 9",
    more: "More Information",
  },
  {
    name: "features",
    total: 38,
    description: "Proposals",
    footer: "Implemented: 6",
    more: "More Information",
  },
];

export const Card1 = () => {
  return (
    <section className="page card-1-page">
      <div className="cards">
        {cards.map((card) => (
          <label id={card.name}>
            <input type="checkbox" />
            <div className="card">
              <div className="front">
                <header>
                  <h2>{card.name}</h2>
                  <span className="material-symbols-outlined"> more_vert </span>
                </header>
                <var>{card.total}</var>
                <h3>{card.description}</h3>
                <h4>{card.footer}</h4>
              </div>
              <div className="back">
                <header>
                  <h2>{card.name}</h2>
                  <span className="material-symbols-outlined"> close </span>
                </header>
                <p>More Information</p>
              </div>
            </div>
          </label>
        ))}
      </div>
    </section>
  );
};
