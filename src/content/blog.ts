export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  displayDate: string;
  readTime: string;
  tags: string[];
  featured: boolean;
  draft: boolean;
  content: string;
};

type Frontmatter = Record<string, string>;

const postFiles = import.meta.glob("./posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const unquote = (value: string) => value.replace(/^("|')|("|')$/g, "").trim();

const parsePost = (path: string, source: string): BlogPost => {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  const frontmatter: Frontmatter = {};
  let content = source;

  if (match) {
    match[1].split(/\r?\n/).forEach((line) => {
      const separator = line.indexOf(":");
      if (separator === -1) return;

      const key = line.slice(0, separator).trim();
      const value = line.slice(separator + 1).trim();
      frontmatter[key] = unquote(value);
    });
    content = match[2].trim();
  }

  const filename = path.split("/").pop()?.replace(/\.md$/, "") ?? "post";
  const rawDate = frontmatter.date || new Date().toISOString().slice(0, 10);
  const parsedDate = new Date(`${rawDate}T12:00:00`);
  const displayDate = Number.isNaN(parsedDate.getTime())
    ? rawDate
    : new Intl.DateTimeFormat("en", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }).format(parsedDate);

  return {
    slug: frontmatter.slug || filename,
    title: frontmatter.title || filename.replace(/-/g, " "),
    excerpt: frontmatter.excerpt || "",
    date: rawDate,
    displayDate,
    readTime: frontmatter.readTime || "4 min read",
    tags: (frontmatter.tags || "Notes")
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean),
    featured: frontmatter.featured === "true",
    draft: frontmatter.draft !== "false",
    content,
  };
};

export const allPosts = Object.entries(postFiles)
  .map(([path, source]) => parsePost(path, source))
  .sort((a, b) => b.date.localeCompare(a.date));

export const publishedPosts = allPosts.filter((post) => !post.draft);

export const getPostBySlug = (slug?: string) =>
  publishedPosts.find((post) => post.slug === slug);
