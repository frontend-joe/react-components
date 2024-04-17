import { useState, useEffect } from "react";
import "./styles.css";

export const Parallax1 = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => setScrollPosition(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="page parallax-1-page">
      <section
        style={{
          backgroundSize: `${(window.outerHeight - scrollPosition) / 3}%`,
        }}
        className="parallax-banner parallax-container"
      >
        <h2>Parallax</h2>
        <button>Get Started</button>
      </section>
      <section className="parallax-container">
        <h2>What is parallax?</h2>
        <p>
          Parallax is a displacement or difference in the apparent position of
          an object viewed along two different lines of sight and is measured by
          the angle or half-angle of inclination between those two lines. Due to
          foreshortening, nearby objects show a larger parallax than farther
          objects, so parallax can be used to determine distances.
        </p>
        <p>
          Parallax also affects optical instruments such as rifle scopes,
          binoculars, microscopes, and twin-lens reflex cameras that view
          objects from slightly different angles. Many animals, along with
          humans, have two eyes with overlapping visual fields that use parallax
          to gain depth perception; this process is known as stereopsis. In
          computer vision the effect is used for computer stereo vision, and
          there is a device called a parallax rangefinder that uses it to find
          the range, and in some variations also altitude to a target.
        </p>
        <p>
          Parallax is a displacement or difference in the apparent position of
          an object viewed along two different lines of sight and is measured by
          the angle or half-angle of inclination between those two lines. Due to
          foreshortening, nearby objects show a larger parallax than farther
          objects, so parallax can be used to determine distances.
        </p>
        <p>
          Parallax also affects optical instruments such as rifle scopes,
          binoculars, microscopes, and twin-lens reflex cameras that view
          objects from slightly different angles. Many animals, along with
          humans, have two eyes with overlapping visual fields that use parallax
          to gain depth perception; this process is known as stereopsis. In
          computer vision the effect is used for computer stereo vision, and
          there is a device called a parallax rangefinder that uses it to find
          the range, and in some variations also altitude to a target.
        </p>
      </section>
    </div>
  );
};
