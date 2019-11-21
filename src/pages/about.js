import React from "react"
import SEO from "../components/SEO";
import styles from "../styles/page.module.scss";

export default () => (
    <div className={styles.container}>
        <SEO title="About | Launched" />
        <h1>About</h1>
        <p>Hi 👋, I'm Charlie Chapman and Launched is my podcast where I interview app developers and other creators about their experiences releasing a creation out into the world.</p>
        <p>I recently went through this process myself with the launch of my iOS app Dark Noise and I found that listening to developer interviews on podcasts was extremely helpful in preparing me for what to expect and giving me ideas on how to build a marketing plan around the release. My hope is that Launched can be a resource for aspiring creators by providing a platform for people to share their experiences launching something into the world.</p>
        <p>This is where I need your help. If you are an app developer or creator who has a launch story to tell (or a future launch coming up) I'd love to hear from you! I've created a form to collect applications for coming on the show here.</p>
        <p>If this podcast sounds interesting to you, give us a follow on Twitter at @LaunchedFM or my personal account at @chuckyc17. And if you have any ideas or feedback, my DMs are always open!</p>
        <h3>Official Accounts</h3>
        <p>Twitter: <a href="https://twitter.com/launchedfm">@launchedfm</a></p>
        <p>Email: <a href="mailto:charliemchapman@gmail.com">charliemchapman@gmail.com</a></p>
    </div>
)