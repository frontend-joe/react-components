import { useState } from "react";
import "./FabButton.css";

const Icon = ({ children }) => (
  <span className="material-symbols-outlined">{children}</span>
);

export const FabButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="page fab-button-page">
      <div className={`fab ${isOpen ? "open" : ""}`}>
        <button onClick={() => setIsOpen(!isOpen)}>
          <Icon>add</Icon>
        </button>
        <div className="fab-menu">
          <button>
            <Icon>favorite</Icon>
          </button>
          <button>
            <Icon>sell</Icon>
          </button>
          <button>
            <Icon>settings</Icon>
          </button>
        </div>
      </div>
    </section>
  );
};
