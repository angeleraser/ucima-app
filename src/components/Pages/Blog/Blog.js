import React from "react";
import BlogAsks from "./BlogAsks";
import FAQ from "./FAQ";
import Methods from "./Methods";

const Blog = () => {
  return (
    <main className="main-content blog">
      <BlogAsks />
      <Methods />
      <FAQ />
    </main>
  );
};

export default Blog;
