import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <span className="footer-copyright">© 2026 Alexander Tupkalo</span>
      
      <div className="footer-links">
        {/* # */}
        <a href="https://github.com/alexander-tupkalo" target="_blank" rel="noopener noreferrer" className="footer-link">
          GitHub
        </a>
        <span className="footer-dot">·</span>
        <a href="https://linkedin.com/in/alexandertupkalo" target="_blank" rel="noopener noreferrer" className="footer-link">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;