import { Link } from "react-router-dom";

const SiteFooter = () => (
  <footer className="site-footer">
    <div className="site-footer__signal">
      <span className="status-light" />
      Open channel / juliakroger@gmail.com
    </div>

    <div className="site-footer__main">
      <p className="site-footer__eyebrow">Have an interesting problem?</p>
      <a className="site-footer__headline" href="mailto:juliakroger@gmail.com">
        LET'S BUILD
        <span aria-hidden="true">↗</span>
      </a>
    </div>

    <div className="site-footer__bottom">
      <p>© {new Date().getFullYear()} Júlia Kroger</p>
      <div className="site-footer__links">
        <a href="https://github.com/juliakroger" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/juliakroger/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <Link to="/blog">Blog</Link>
      </div>
      <p>Full-stack developer / Web3</p>
    </div>
  </footer>
);

export default SiteFooter;
