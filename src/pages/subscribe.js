import React from "react"
import SEO from "../components/SEO";
import styles from "../styles/page.module.scss";

export default () => (
    <div className={styles.container}>
        <SEO title="Subscribe | Launched" />
        <h1>Subscribe</h1>
        <p>Launched is available wherever you listen to podcasts.  Just search "Launched" and look for the paper airplane!</p>
        <p>You can also subscribe directly below:</p>
        <ul>
            <li><a href="/">RSS (coming soon)</a></li>
            <li><a href="/">Apple Podcast (coming soon)</a></li>
            <li><a href="/">Google Play (coming soon)</a></li>
            <li><a href="/">Overcast (coming soon)</a></li>
            <li><a href="/">Castro (coming soon)</a></li>
            <li><a href="/">Pocket Casts (coming soon)</a></li>
        </ul>
    </div>
)