import { useState } from "react";
import "./TrashButton.css";
import paper from "./paper.svg";
import shredded from "./shredded.svg";

export const TrashButton = () => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleClick = () => {
    setIsDeleting(true);
    // do something async
    setTimeout(() => {
      setIsDeleting(false);
    }, 2500);
  };

  return (
    <div className="page trash-button-page">
      <button
        onClick={handleClick}
        className={`trash-button ${isDeleting ? "deleting" : ""}`}
        disabled={isDeleting}
      >
        <span className="loader"></span>
        <span className="button-text">Delete</span>
        <span className="animation">
          <span className="paper-wrapper">
            <img src={paper} className="paper" />
          </span>
          <span className="shredded-wrapper">
            <img src={shredded} className="shredded" />
          </span>
          <span className="lid"></span>
          <span className="can">
            <span className="filler"></span>
          </span>
        </span>
      </button>
    </div>
  );
};
