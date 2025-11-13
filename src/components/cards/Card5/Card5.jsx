import { useState } from "react";
import "./Card5.css";
import { Dropdown } from "./Dropdown";

const days = ["today", "yesterday"];

const yValues = [300, 200, 100, 0];

const data = [
  {
    name: "today",
    values: [
      {
        name: "Protein",
        value: 180,
        energy: 420,
      },
      {
        name: "Fat",
        value: 260,
        energy: 560,
      },
      {
        name: "Carbs",
        value: 200,
        energy: 490,
      },
    ],
  },
  {
    name: "yesterday",
    values: [
      {
        name: "Protein",
        value: 250,
        energy: 503,
      },
      {
        name: "Fat",
        value: 150,
        energy: 450,
      },
      {
        name: "Carbs",
        value: 240,
        energy: 652,
      },
    ],
  },
];

export const Card5 = ({ title }) => {
  const [day, setDay] = useState("today");

  const activeData = data.find((d) => d.name === day);

  const handleDayChanged = (nextDay) => setDay(nextDay);

  return (
    <div className="card-5">
      <div className="card-5-header">
        <h2>{title}</h2>
        <Dropdown items={days} selectedItem={day} onSelect={handleDayChanged} />
      </div>
      <div className="card-5-chart">
        <div className="card-5-chart-y-axis">
          {yValues.map((v) => (
            <label>{v} g</label>
          ))}
        </div>
        <div className="card-5-chart-bars">
          {activeData.values.map((v) => (
            <div className="card-5-chart-bar-wrapper">
              <div
                className="card-5-chart-bar"
                style={{ height: `${v.value / 1.675}px` }}
              ></div>
              <label>{v.name}</label>
              <div className="card-5-chart-tooltip">
                <h3>Energy</h3>
                <var>{v.energy} kcal</var>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
