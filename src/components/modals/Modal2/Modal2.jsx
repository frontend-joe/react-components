import { createPortal } from "react-dom";
import "./Modal2.css";

export const Modal2 = ({
  title,
  subtitle,
  modalContent,
  toggleModal,
  isOpen,
}) => {
  const open = isOpen === null ? "default" : isOpen ? "open" : "closed";

  const Overlay = () => (
    <div className={`modal-2-overlay ${open}`} onClick={toggleModal} />
  );

  const Dialog = () => (
    <div
      className={`modal-2-modal ${open}`}
      onClick={(e) => e.stopPropagation()}
    >
      <header>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
      </header>
      {modalContent}
    </div>
  );

  return (
    <>
      {createPortal(<Overlay />, document.body)}
      {createPortal(<Dialog />, document.body)}
    </>
  );
};
