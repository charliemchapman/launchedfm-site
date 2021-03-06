import React from "react";
import Link from "gatsby-link";
import styles from "../styles/post-summary.module.scss";

export default ({post}) => {
  let image = !post.frontmatter.imageUrl ? null : (
        <img src={post.frontmatter.imageUrl} alt="post thumbnail"/>
  )

  return (
    <div className={styles.post}>
        <div className={styles.image}>
            {image}
        </div>
        <div>
            <h3>
                <Link to={post.fields.slug} className={styles.title}>
                    Blog: {post.frontmatter.title}
                </Link>
            </h3>
            <div className={styles.date}>
                {new Date(post.frontmatter.date).toLocaleDateString()}
            </div>
            <p>{post.excerpt}</p>
        </div>
    </div>
    )
};