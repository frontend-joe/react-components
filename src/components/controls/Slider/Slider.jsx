import { useState } from "react";
import "./Slider.css";

const getBarWidth = (numValue) => {
  const THUMB_SIZE = 19;
  const percentageOfThumb = (THUMB_SIZE * numValue) / 100;
  return `${numValue - percentageOfThumb / 2}%`;
};

export const Slider = ({ id, label, min, max, initialValue }) => {
  const [barWidth, setBarWidth] = useState(getBarWidth(+initialValue));

  const [value, setValue] = useState(initialValue);

  const MARKERS = [1, 25, 50, 75, 100];

  const onInput = (e) => {
    const inputValue = e.target.value;

    // Allow empty string
    if (inputValue === "") {
      setValue("");
      setBarWidth("0%");
      return;
    }

    const numValue = Number(inputValue);
    if (!isNaN(numValue) && numValue >= 0 && numValue <= 100) {
      setValue(inputValue);
      setBarWidth(getBarWidth(numValue));
    }
  };

  return (
    <div className="slider-wrapper">
      <label className="slider-label" htmlFor={id}>
        {label}
      </label>
      <div className="slider">
        <input
          id={id}
          type="range"
          min={min}
          max={max}
          value={Number(value) || 0}
          onInput={onInput}
        />
        <div className="track"></div>
        <div className="markers">
          {MARKERS.map((marker) => (
            <div
              key={marker}
              className={`marker ${
                marker <= Number(value) ? "marker-active" : ""
              }`}
              style={{ "--left": `${marker}%` }}
            ></div>
          ))}
        </div>
        <div className="bar" style={{ width: barWidth }}></div>
      </div>
      <div className="numeric-input-wrapper">
        <input
          type="text"
          className="numeric-input"
          value={value}
          onInput={onInput}
          maxLength={3}
        />
        <span className="numeric-input-suffix"> % </span>
      </div>
    </div>
  );
};
