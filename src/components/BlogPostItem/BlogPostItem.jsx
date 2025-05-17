// BlogPostItem.jsx
import React from "react";
import styles from "./BlogPostItem.module.css";
import { Link } from 'react-router-dom';

const BlogPostItem = ({ id, url, title, summary, date }) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className={styles.blogPostItem}>
      
      <div className={styles.postTitle}>
        <h2> <Link to={url}>{title}</Link></h2>
      </div>
      <p className={styles.summary}>{summary}</p>
      <p className={styles.date}>Published on {formattedDate}</p>
    </div>
  );
};

export default BlogPostItem;
