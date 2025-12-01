import { Card6 } from "./Card6";
import "./Card6Example.css";
import avatar from "./avatar.png";

const tags = ["Figma", "UX Design"];

const Rating = () => <var className="card-6-rating">4.58</var>;

const stats = [
  <>
    <Rating />
    <label>Rating</label>
  </>,
  <>
    <var>$15k</var>
    <label>Earned</label>
  </>,
  <>
    <var>32h</var>
    <label>Hours</label>
  </>,
];

export const Card6Example = () => (
  <section className="page card-6-page">
    <Card6
      name="Kai Harris"
      role="Product designer"
      img={avatar}
      tags={tags}
      stats={stats}
    />
  </section>
);
