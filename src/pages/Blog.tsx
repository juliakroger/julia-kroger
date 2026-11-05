import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { publishedPosts } from "@/content/blog";

const Blog = () => (
  <div className="site-shell">
    <Navbar />

    <main className="blog-page">
      <header className="blog-hero technical-grid">
        <div className="blog-hero__meta">
          <p>
            <span className="status-light" />
            Archive status / online
          </p>
          <span>{String(publishedPosts.length).padStart(2, "0")} entries</span>
        </div>
        <h1>
          FIELD<span>_</span>
          <br />
          NOTES
        </h1>
        <div className="blog-hero__intro">
          <span>JOURNAL / 2026</span>
          <p>
            Technical notes, experiments, and lessons from building digital products.
          </p>
        </div>
        <div className="blog-hero__mark" aria-hidden="true">
          <i />
          <span>JK</span>
        </div>
      </header>

      <section className="blog-index" aria-labelledby="archive-title">
        <div className="blog-index__header">
          <p id="archive-title">LATEST TRANSMISSIONS</p>
          <span>ORDER / DESCENDING</span>
        </div>

        {publishedPosts.length > 0 ? (
          <div className="blog-grid">
            {publishedPosts.map((post, index) => (
              <Link
                className={`blog-card${post.featured ? " blog-card--featured" : ""}`}
                to={`/blog/${post.slug}`}
                key={post.slug}
              >
                <div className="blog-card__topline">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <time dateTime={post.date}>{post.displayDate}</time>
                </div>
                <div className="blog-card__body">
                  <p>{post.tags.join(" / ")}</p>
                  <h2>{post.title}</h2>
                  <span>{post.excerpt}</span>
                </div>
                <div className="blog-card__footer">
                  <span>{post.readTime}</span>
                  <strong>Read note ↗</strong>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="blog-empty">
            <div className="blog-empty__scope" aria-hidden="true">
              <span />
              <i />
            </div>
            <div>
              <p>THE ARCHIVE IS QUIET — FOR NOW.</p>
              <h2>FIRST TRANSMISSION IN PROGRESS.</h2>
              <span>
                New engineering notes and project stories will appear here soon.
              </span>
            </div>
            <Link className="text-link" to="/">
              Return to index ↙
            </Link>
          </div>
        )}
      </section>
    </main>

    <SiteFooter />
  </div>
);

export default Blog;
