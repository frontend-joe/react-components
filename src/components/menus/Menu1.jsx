import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Menu1.css";

export const pages = {
  about: {
    title: "About",
    content: `I'm a frontend developer who loves turning ideas into fast, accessible
interfaces. I spend most of my time in React and modern CSS, building
polished UI components and sharing what I learn along the way. Clean code,
thoughtful details, and a great user experience are what get me excited
about the web.`,
  },
  portfolio: {
    title: "Portfolio",
    content: `From animated navigation menus and dropdowns to full component libraries,
my work focuses on reusable, production-ready UI. Each project is an
experiment in getting the interaction, motion, and layout just right —
and this very menu is one of them. Browse the collection to see how each
piece is put together.`,
  },
  services: {
    title: "Services",
    content: `I help teams and creators build beautiful, responsive frontends: component
design and development, design-to-code implementation, and performance and
accessibility improvements. Whether you need a single polished feature or a
complete interface, I can help bring it to life.`,
  },
  contact: {
    title: "Contact",
    content: `Have a project in mind or just want to talk shop? I'm always happy to hear
about new ideas and collaborations. Reach out through my social channels or
YouTube, and I'll get back to you as soon as I can. Let's build something
great together.`,
  },
};

const links = Object.keys(pages);

export const MenuPage = ({ page }) => {
  const { title, content } = pages[page];

  return (
    <>
      <h2>{title}</h2>
      <p>{content}</p>
    </>
  );
};

export const Menu1 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((open) => !open);

  const isOpen = isMenuOpen ? "open" : "";

  return (
    <section className="page menu-1-page">
      <button className={`burger ${isOpen}`} onClick={toggleMenu}></button>
      <div className={`background ${isOpen}`}></div>
      <div className={`menu ${isOpen}`}>
        <nav>
          {links.map((link, index) => (
            <Link
              key={link}
              to={link}
              className={isMenuOpen ? "appear" : ""}
              style={{ animationDelay: `0.${index + 1}s` }}
              onClick={() => setIsMenuOpen(false)}
            >
              {link}
            </Link>
          ))}
        </nav>
      </div>
      <main className={`content ${isOpen}`}>
        <Outlet />
      </main>
    </section>
  );
};
