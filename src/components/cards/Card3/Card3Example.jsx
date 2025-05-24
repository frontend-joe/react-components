import { Card3 } from "./Card3";
import "./Card3Example.css";

export const Card3Example = () => {
  const onShare = () => console.log("share");
  const onSave = () => console.log("share");

  return (
    <section className="page card-3-page">
      <Card3
        company="Google"
        isRemote
        level="Junior"
        location="Florida, US"
        onSave={onSave}
        onShare={onShare}
        profileMatch={64}
        role="AI Engineer"
        salary="10k"
        when="3 hours ago"
      />
    </section>
  );
};
