import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useState } from "react";
import "./RcSlider.css";

export const RcSlider = () => {
  const [value, setValue] = useState(20000);

  const handleChange = (val) => setValue(Number(val));

  return (
    <section className="page rc-slider-page">
      <div className="slider-card">
        <header>
          <h2>Mortgage Value</h2>
          <var>
            <abbr>$</abbr>
            {value.toLocaleString("en-US")}
          </var>
        </header>
        <Slider step={25} max={100000} value={value} onChange={handleChange} />
      </div>
    </section>
  );
};
