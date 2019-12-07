import React from "react";
import Link from "gatsby-link";
import styles from "../styles/post-summary.module.scss";
import { formatDuration } from "../utils/formatters"

export default ({episode}) => {
  return (
    <div className={styles.post}>
        <div className={styles.image}>
            <img src={episode.itunes.image} alt="episode thumbnail"/>
        </div>
        <div>
            <h3>
                <Link to={episode.fields.slug} className={styles.title}>
                    {episode.title}
                </Link>
            </h3>
            <div className={styles.date}>
                {new Date(episode.pubDate).toLocaleDateString()} · {formatDuration(episode.itunes.duration)}
            </div>
            <p>{episode.itunes.subtitle}</p>
        </div>
    </div>
)};