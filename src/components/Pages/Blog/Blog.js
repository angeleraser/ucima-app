import React from "react";
import BlogAsks from "./BlogAsks";
import FAQ from "./FAQ";
import Methods from "./Methods";
import { useContext } from "react";
import { AppContext } from "../../App/AppContext";
import { useEffect } from "react";
const Blog = () => {
  const { setCurrentPage } = useContext(AppContext);
  useEffect(() => {
    setCurrentPage("/blog");
  });
  return (
    <main className="main-content blog">
      <BlogAsks />
      <Methods />
      <FAQ />
    </main>
  );
};

export default Blog;
