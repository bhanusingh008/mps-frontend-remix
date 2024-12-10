import { json } from "@remix-run/node"; // For server-side methods
import { useLoaderData } from "@remix-run/react";
import Parser from "rss-parser";

type BlogPost = {
  title: string;
  link: string;
};

export async function loader() {
  const parser = new Parser();
  const feed = await parser.parseURL("https://mpsblog6.wordpress.com/feed/");
  const posts = feed.items.map((item) => ({
    title: item.title || "Untitled",
    link: item.link || "#",
  }));
  return json(posts);
}

const Blog = () => {
  const posts = useLoaderData<BlogPost[]>();

  return (
    <div className="main-blog-ctn">
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <a href={post.link} target="_blank" rel="noopener noreferrer">
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
