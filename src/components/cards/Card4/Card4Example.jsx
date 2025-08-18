import { Card4 } from "./Card4";
import "./Card4Example.css";

export const Card4Example = () => {
  const handleSocialClick = (type) => {
    console.log("handleSocialClick", type);
  };

  const socials = ["facebook", "discord", "pinterest", "dribbble"];

  return (
    <section className="page card-4-page">
      <Card4
        name="Karen Smith"
        role="Prompt Engineer"
        bio="Turning ideas into the real thing, making interfaces that proper inspire and keep folks buzzing."
        socials={socials}
        onSocialClck={handleSocialClick}
      />
    </section>
  );
};
