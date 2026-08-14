import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-label">FRONTEND DEVELOPER</span>
        
        <h1 className="hero-title">Alexander Tupkalo</h1>
        
        <p className="hero-description">
          Building interactive digital products with JavaScript,
          React and modern web technologies.
        </p>
        
        <a href="#work" className="hero-cta">
          VIEW SELECTED WORK ↗
        </a>
      </div>
    </section>
  );
}

export default Hero;