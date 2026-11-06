import { Link, useParams } from "react-router-dom";
import MarkdownContent from "@/components/MarkdownContent";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { getPostBySlug } from "@/content/blog";

const BlogPost = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="site-shell">
        <Navbar />
        <main className="not-found technical-grid">
          <span>ERROR / 404</span>
          <h1>TRANSMISSION<br />NOT FOUND.</h1>
          <p>The note may still be a draft, or its coordinates have changed.</p>
          <Link className="button button--signal" to="/blog">
            Back to field notes ↙
          </Link>
        </main>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="site-shell">
      <Navbar />
      <main className="article-page">
        <header className="article-header technical-grid">
          <Link className="article-header__back" to="/blog">
            {"< ALL FIELD NOTES"}
          </Link>
          <div className="article-header__meta">
            <span>{post.tags.join(" / ")}</span>
          </div>
          <h1>{post.title}</h1>
          <p>{post.excerpt}</p>
          <div className="article-header__signal" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
        </header>

        <article className="article-body">
          <aside aria-label="Article details">
            <div>
              <span>WRITTEN BY</span>
              <strong>JÚLIA KROGER</strong>
            </div>
            <i />
            <div>
              <span>PUBLISHED</span>
              <time dateTime={post.date}>{post.displayDate}</time>
            </div>
          </aside>
          <MarkdownContent content={post.content} />
        </article>

        <div className="article-end">
          <span>END OF TRANSMISSION</span>
          <Link to="/blog">Browse the archive ↗</Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};

export default BlogPost;
