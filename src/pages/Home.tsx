import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ProjectGallery from "@/components/ProjectGallery";
import SciFiOrb from "@/components/SciFiOrb";
import SiteFooter from "@/components/SiteFooter";
import { careerStartYear, experiences } from "@/constants/experiences";
import { technologies } from "@/constants/technologies";
import { publishedPosts } from "@/content/blog";

const Arrow = () => <span aria-hidden="true">↗</span>;

const SectionHeading = ({
  index,
  eyebrow,
  title,
}: {
  index: string;
  eyebrow: string;
  title: string;
}) => (
  <header className="section-heading">
    <div className="section-heading__meta">
      <span>{index}</span>
      <p>{eyebrow}</p>
    </div>
    <h2>{title}</h2>
  </header>
);

const Home = () => {
  const latestPosts = publishedPosts.slice(0, 3);
  const yearsInProduction = new Date().getFullYear() - careerStartYear;

  return (
    <div className="site-shell">
      <Navbar />

      <main>
        <section className="hero technical-grid" id="top">
          <div className="hero__ruler" aria-hidden="true">
            <span>0</span>
            <span>25</span>
            <span>50</span>
            <span>75</span>
            <span>100</span>
          </div>

          <div className="hero__copy">
            <p className="eyebrow hero__eyebrow">
              <span className="status-light" />
              Full-stack developer / Web3 / Team lead
            </p>
            <h1>
              <span>BUILDING</span>
              <span>DIGITAL</span>
              <span className="hero__outline">SYSTEMS.</span>
            </h1>
          </div>

          <div className="hero__orb">
            <SciFiOrb />
          </div>

          <div className="hero__intro">
            <p>
              I’m Júlia Kroger, a full-stack developer turning complex product ideas
              into fast, thoughtful web experiences.
            </p>
            <a className="button button--signal" href="#projects">
              Explore selected work <Arrow />
            </a>
          </div>

          <div className="hero__coordinates" aria-label="Professional details">
            <div>
              <span>FOCUS</span>
              <strong>WEB / PRODUCT / WEB3</strong>
            </div>
            <div>
              <span>EXPERIENCE</span>
              <strong>{yearsInProduction}+ YEARS IN PRODUCTION</strong>
            </div>
            <div>
              <span>CHANNELS</span>
              <a href="https://github.com/juliakroger" target="_blank" rel="noreferrer">
                GH
              </a>
              <a
                href="https://www.linkedin.com/in/juliakroger/"
                target="_blank"
                rel="noreferrer"
              >
                IN
              </a>
            </div>
          </div>
        </section>

        <section className="profile-section" id="profile">
          <SectionHeading index="02" eyebrow="Operator profile" title="BEYOND THE CODE" />

          <div className="profile-layout">
            <div className="profile-layout__statement">
              <p className="oversized-quote">
                I connect engineering, design, and product thinking to build systems
                people actually enjoy using.
              </p>
              <span className="profile-layout__stamp">JK / ENGINEERING</span>
            </div>

            <div className="profile-layout__body">
              <p>
                I’m a full-stack developer experienced in TypeScript, JavaScript,
                React, Node.js, and Web3. My work spans front-end and back-end systems,
                architecture, performance, and team leadership.
              </p>
            </div>
          </div>

          <div className="capability-grid">
            {[
              ["01", "Product interfaces", "React systems, responsive UI, and interaction design."],
              ["02", "Full-stack architecture", "Node.js services, APIs, data, cloud, and delivery."],
              ["03", "Web3 products", "Wallet-connected experiences, DeFi, NFTs, and gaming."],
            ].map(([number, title, description]) => (
              <article className="capability-card" key={number}>
                <span>{number}</span>
                <div className="capability-card__icon" aria-hidden="true">
                  <i />
                  <i />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>

          <div className="technology-rail" aria-label="Technologies I work with">
            <p>TOOLS / SYSTEMS</p>
            <div className="technology-rail__track">
              {technologies.map((technology) => (
                <div className="technology-chip" key={technology.name}>
                  <img src={technology.icon} alt="" />
                  <span>{technology.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="projects-section" id="projects">
          <SectionHeading index="03" eyebrow="Selected transmissions" title="PROJECT ARCHIVE" />
          <ProjectGallery />
        </section>

        <section className="experience-section" id="experience">
          <SectionHeading index="04" eyebrow="Work trajectory" title="MISSION LOG" />

          <div className="experience-list">
            {experiences
              .slice()
              .reverse()
              .map((experience, index) => (
                <article className="experience-row" key={`${experience.company_name}-${experience.date}`}>
                  <div className="experience-row__index">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="experience-row__company">
                    <img src={experience.icon} alt="" />
                    <div>
                      <p>{experience.company_name}</p>
                      <span>{experience.date}</span>
                    </div>
                  </div>
                  <div className="experience-row__role">
                    <h3>{experience.title}</h3>
                    <p>{experience.summary}</p>
                  </div>
                </article>
              ))}
          </div>
        </section>

        <section className="notes-section" id="notes">
          <div className="notes-section__intro">
            <span>05 / FIELD NOTES</span>
            <h2>IDEAS FROM THE BUILD LOG.</h2>
            <p>
              Technical notes, project lessons, and observations from building for the
              web.
            </p>
            <Link className="button button--ink" to="/blog">
              Enter the blog <Arrow />
            </Link>
          </div>

          <div className="notes-section__feed">
            {latestPosts.length > 0 ? (
              latestPosts.map((post, index) => (
                <Link className="note-preview" to={`/blog/${post.slug}`} key={post.slug}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <p>{post.tags.join(" / ")}</p>
                    <h3>{post.title}</h3>
                  </div>
                  <time dateTime={post.date}>{post.displayDate}</time>
                  <Arrow />
                </Link>
              ))
            ) : (
              <div className="notes-empty">
                <div className="notes-empty__radar" aria-hidden="true">
                  <i />
                </div>
                <p>NO PUBLIC TRANSMISSIONS YET</p>
                <span>The first field note is currently being prepared.</span>
              </div>
            )}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};

export default Home;
