import { Slider } from "./Slider";
import "./SliderExample.css";

export const SliderExample = () => (
  <section className="page slider-page">
    <Slider id="my-slider" label="Amount" min={0} max={100} initialValue="50" />
  </section>
);
