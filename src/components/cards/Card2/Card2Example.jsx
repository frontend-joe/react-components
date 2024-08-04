import { Card2 } from "./Card2";
import image from "./image.jpg";

export const Card2Example = () => {
  const handleProfile = () => {
    // goto profile
  };

  const handleFollow = () => {
    // follow account
  };

  return (
    <section className="page card-2-example-page">
      <Card2
        image={image}
        title="Jess Wilson"
        subtitle="UX Engineer"
        description="Empowering users through captivating interfaces, turning ideas into pixel-perfect realities."
        onProfile={handleProfile}
        onFollow={handleFollow}
      />
    </section>
  );
};
