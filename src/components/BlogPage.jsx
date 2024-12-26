import React from "react";
import { useParams } from "react-router-dom";
import { Blogs } from "../utils/blogs";
import { useTranslation } from "react-i18next";

const BlogPage = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();

  return (
    <div className="blog-page-container">
      <header className="blog-page-header">
        <h1>{i18n.language === "ar" ? Blogs[id].title : Blogs[id].title_en}</h1>
      </header>
      <img
        src={`/images/blog/blog-${+id + 1}.png`}
        alt={i18n.language === "ar" ? Blogs[id].title : Blogs[id].title_en}
        className="blog-page-image"
      />
      <div className="blog-page-body">
        <p className="blog-page-description">
          {i18n.language === "ar"
            ? Blogs[id].description
            : Blogs[id].description_en}
        </p>
        <div className="blog-page-content">{i18n.language === "ar" ? Blogs[id].body : Blogs[id].body_en}</div>
      </div>
    </div>
  );
};

export default BlogPage;
