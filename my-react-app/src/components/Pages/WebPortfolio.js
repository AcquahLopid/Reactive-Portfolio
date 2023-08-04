import React, { useRef } from "react";
import "./Portfolio.css"; // Add your own CSS file for styling

const Portfolio = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const portfolioRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="portfolio">
      <nav className="navbar">
        <ul>
          <li onClick={() => scrollToSection(homeRef)}>Home</li>
          <li onClick={() => scrollToSection(aboutRef)}>About</li>
          <li onClick={() => scrollToSection(contactRef)}>Contact</li>
          <li onClick={() => scrollToSection(portfolioRef)}>Portfolio</li>
        </ul>
      </nav>

      <div ref={homeRef}>
        <Home />
      </div>

      <div ref={aboutRef}>
        <About />
      </div>

      <div ref={contactRef}>
        <Contact />
      </div>

      <div ref={portfolioRef}>
        <PortfolioSection />
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <section id="home" className="section">
      {/* Your Home section content */}
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="section">
      {/* Your About section content */}
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section">
      {/* Your Contact section content */}
    </section>
  );
};

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="section">
      {/* Your Portfolio section content */}
    </section>
  );
};

export default Portfolio;
