import image from "./image.jpg";
import "./EditableTextExample.css";
import { EditableText } from "./EditableText";
import { useState } from "react";

export const EditableTitleExample = () => {
  const [state, setState] = useState({
    title: "Jill Scott",
    role: "Frontend Engineer",
  });

  const { title, role } = state;

  const handleSave = (name, value) =>
    setState({
      ...state,
      [name]: value,
    });

  return (
    <section className="page editable-text-page">
      <div className="editable-text-card">
        <img src={image} />
        <div>
          <EditableText
            className="editable-text-card-title"
            name="title"
            defaultValue={title}
            onSave={handleSave}
          />
          <EditableText
            className="editable-text-card-role"
            name="role"
            defaultValue={role}
            onSave={handleSave}
          />
          <p>
            Transforming ideas into realities, creating interfaces that inspire
            and engage users dreams.
          </p>
          <div className="editable-text-socials">
            <button>
              <i className="fa-brands fa-dribbble"></i>
            </button>
            <button>
              <i className="fa-brands fa-pinterest"></i>
            </button>
            <button>
              <i className="fa-brands fa-codepen"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
