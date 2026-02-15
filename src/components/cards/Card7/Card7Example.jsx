import { Card7 } from "./Card7";
import image from "./image.jpg";
import "./Card7Example.css";

const socials = ["dribbble", "pinterest", "codepen"];

export const Card7Example = () => (
  <section className="page card-7-page">
    <Card7
      name="Jill Scott"
      role="UX Designer"
      image={image}
      bio="Transforming ideas into realities, creating interfaces that inspire
          and engage users dreams."
      socials={socials}
    />
  </section>
);
