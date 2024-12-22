import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Blogs.css";

// Define the Blog type
export interface Blog {
  id: number;
  title: string;
  content: string;
  image_path: string;
  created_at: string;
}

export const Blogs = () => {
  const backend_url = import.meta.env.VITE_APP_BACKEND_URL;
  const [blogs, setBlogs] = useState<Blog[]>([]); // Use the Blog type for state

  useEffect(() => {
    const load = async () => {
      try {
        const res = await axios.get(`${backend_url}/api/getBlogPosts`);
        setBlogs(res.data.blogs); // Ensure data is cast correctly
      } catch (err) {
        console.log(err);
      }
    };

    load();
  }, []);

  return (
    <div className="blogs-container">
      <h1>Blogs</h1>
      <div className="tabs-container">
        {blogs.map((blog) => (
          <div className="tab" key={blog.id}>
            <div className="tab-header">
              <h2>{blog.title}</h2>
            </div>
            <div className="tab-body">
              {blog.image_path && (
                <img
                  src={blog.image_path}
                  alt={blog.title}
                  className="blog-image"
                />
              )}
              <p>{blog.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
