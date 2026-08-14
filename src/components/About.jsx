import './About.css';

function About() {
  return (
    <section id="about" className="about">
      {}
      <div className="about-grid">
        
        <div className="about-label">
          {/* digital crosshair */}
          <span className="about-decorator"></span>
          ABOUT
        </div>

        <h2 className="about-heading">
          I build interfaces where technology meets product thinking.
        </h2>

        <div className="about-text">
          <p>
            I'm a frontend developer focused on building interactive digital products with JavaScript and React.
          </p>
          <p>
            I enjoy turning ideas into clear, structured and engaging interfaces — from early concepts to polished experiences.
          </p>
        </div>

      </div>

      {}
      <div className="about-divider"></div>

      {/* metadata */}
      <div className="about-meta">
        <div className="meta-column">
          <span className="meta-label">FOCUS</span>
          <ul className="meta-list">
            <li>Frontend</li>
            <li>Product UI</li>
          </ul>
        </div>
        <div className="meta-column">
          <span className="meta-label">STACK</span>
          <ul className="meta-list">
            <li>JavaScript</li>
            <li>React</li>
            <li>HTML / CSS</li>
          </ul>
        </div>
        <div className="meta-column">
          <span className="meta-label">APPROACH</span>
          <ul className="meta-list">
            <li>Structure</li>
            <li>Interaction</li>
            <li>Clarity</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;