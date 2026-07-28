import { Card8 } from "./Card8";
import image from "./image.jpg";
import "./Card8Example.css";

const tags = ["React", "CSS"];

export const Card8Example = () => (
  <section className="page card-8-page">
    <Card8
      name="Olivia North"
      role="Frontend Developer"
      image={image}
      bio="I build accessible web interfaces with React and CSS,
          turning complex problems into clean, user experiences."
      tags={tags}
    />
  </section>
);
