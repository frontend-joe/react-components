import { useLayoutEffect, useRef, useState } from "react";
import "./EditableText.css";

const setCaret = (el) => {
  if (!el) return;
  try {
    const range = document.createRange();
    const sel = window.getSelection();
    range.setStart(el.childNodes[0], el.innerText.length);
    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range);
  } catch (err) {
    console.log("Error Setting Caret: ", err);
  }
};

const IconButton = ({ children, onClick }) => (
  <button onClick={onClick} type="button">
    <span className="material-symbols-outlined">{children}</span>
  </button>
);

export const EditableText = ({ name, defaultValue, onSave, className }) => {
  const [isEditing, setIsEditing] = useState(false);

  const nextValue = useRef("");

  const spanRef = useRef(null);

  const handleChange = (e) => (nextValue.current = e.target.innerText);

  const handleSave = () => {
    toggleIsEditing();
    onSave(name, nextValue.current);
  };

  const toggleIsEditing = () => setIsEditing(!isEditing);

  useLayoutEffect(() => {
    if (isEditing) {
      spanRef.current.focus();
      setCaret(spanRef.current);
    } else {
      spanRef.current.innerText = defaultValue;
      nextValue.current = defaultValue;
    }
  }, [isEditing]);

  return (
    <span className={`editable-text ${className}`}>
      <span
        className={`editable-text-value  ${isEditing ? "is-editing" : ""}`}
        contentEditable={isEditing}
        defaultValue={defaultValue}
        ref={spanRef}
        name={name}
        onInput={handleChange}
        suppressContentEditableWarning
      >
        {defaultValue}
      </span>
      <span className="editable-text-buttons">
        {isEditing ? (
          <>
            <IconButton onClick={handleSave}>check_circle</IconButton>
            <IconButton onClick={toggleIsEditing}>cancel</IconButton>
          </>
        ) : (
          <IconButton onClick={toggleIsEditing}>edit</IconButton>
        )}
      </span>
    </span>
  );
};
