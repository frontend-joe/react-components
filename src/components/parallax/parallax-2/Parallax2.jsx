import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import "./Parallax2.css";

import image1 from "./1.jpg";
import image2 from "./2.jpg";
import image3 from "./3.jpg";

gsap.registerPlugin(ScrollTrigger);

const sectionsData = [
  { image: image1, text: "Parallax" },
  { image: image2, text: "So smooth" },
  { image: image3, text: "Nice, right?" },
];

const getRatio = (el) =>
  window.innerHeight / (window.innerHeight + el.offsetHeight);

const ParallaxSection = ({ image, text }) => (
  <section>
    <div className="bg" style={{ backgroundImage: `url(${image})` }} />
    <h1>{text}</h1>
  </section>
);

export const Parallax2 = () => {
  const containerRef = useRef(null);

  useGSAP(
    (context) => {
      const sections = gsap.utils.toArray("section", context.scope);

      sections.forEach((section, i) => {
        const bg = section.querySelector(".bg");

        gsap.fromTo(
          bg,
          {
            backgroundPosition: () =>
              i
                ? `50% ${-window.innerHeight * getRatio(section)}px`
                : "50% 0px",
          },
          {
            backgroundPosition: () =>
              `50% ${window.innerHeight * (1 - getRatio(section))}px`,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: () => (i ? "top bottom" : "top top"),
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <main className="page parallax-2-page" ref={containerRef}>
      {sectionsData.map((s, i) => (
        <ParallaxSection key={i} image={s.image} text={s.text} />
      ))}
    </main>
  );
};
