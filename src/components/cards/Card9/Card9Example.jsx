import { Card9 } from "./Card9";
import "./Card9Example.css";

export const Card9Example = () => {
  const onShare = () => console.log("share");
  const onSave = () => console.log("save");

  return (
    <section className="page card-9-page">
      <Card9
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
