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
            <li><a href="http://feed.launchedfm.com">RSS</a></li>
            <li><a href="https://podcasts.apple.com/us/podcast/launched/id1491582246">Apple Podcast</a></li>
            <li><a href="https://open.spotify.com/show/4lVKxKrG2n4pGYST801GLs">Spotify</a></li>
            <li><a href="/">Google Podcasts (coming soon)</a></li>
            <li><a href="https://itunes.apple.com/us/app/overcast-podcast-player/id888422857?ls=1&mt=8">Overcast</a></li>
            <li><a href="https://castro.fm/itunes/1491582246">Castro</a></li>
            <li><a href="https://pca.st/itunes/1491582246">Pocket Casts</a></li>
            <li><a href="https://www.stitcher.com/s?fid=491180">Stitcher</a></li>
        </ul>
    </div>
)