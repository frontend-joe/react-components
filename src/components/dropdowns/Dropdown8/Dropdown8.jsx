import { useState } from "react";
import joe from "./joe.png";
import "./Dropdown8.css";

// Icon sprite offsets (background-position-y) into icons.png — the Google
// apps sprite, sampled at background-size: 53px auto.
const apps = [
  { name: "Account", img: joe },
  { name: "Drive", y: "-350px" },
  { name: "Gmail", y: "-1626px" },
  { name: "YouTube", y: "-2380px" },
  { name: "Gemini", y: "-2322px" },
  { name: "Maps", y: "-1800px" },
  { name: "Search", y: "-1336px" },
  { name: "Calendar", y: "-1568px" },
  { name: "News", y: "-640px" },
  { name: "Photos", y: "-582px" },
  { name: "Meet", y: "-2554px" },
  { name: "Translate", y: "-524px" },
  { name: "Google TV", y: "-118px" },
  { name: "Sheets", y: "-756px" },
  { name: "Docs", y: "-872px" },
];

export const Dropdown8 = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="dropdown-8">
      <button
        className="apps-btn material-symbols-outlined"
        aria-label="Google apps"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        apps
      </button>

      {open && <div className="scrim" onClick={() => setOpen(false)} />}

      <div className={`popover ${open ? "open" : ""}`}>
        <div className="popover-head">
          <h3>Your favourites</h3>
          <button className="edit-btn material-symbols-outlined" aria-label="Edit">
            edit
          </button>
        </div>
        <div className="apps-grid">
          {apps.map((app) => (
            <button className="app" key={app.name}>
              {app.img ? (
                <img className="app-avatar" src={app.img} alt={app.name} />
              ) : (
                <span className="app-icon" style={{ "--y": app.y }} />
              )}
              <span className="app-label">{app.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
