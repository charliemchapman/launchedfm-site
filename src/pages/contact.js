import React from "react"
import SEO from "../components/SEO";
import styles from "../styles/page.module.scss";

export default () => (
    <div className={styles.container}>
        <SEO title="Contact | Launched" />
        <h1>Contact</h1>

        <p>If you want to discuss the show with other listeners or make recommendations, the best place to reach out is the dedicated Subreddit below.</p>
        <p>If you want to reach out less publicly, my Twitter DM's are open, or feel free to send me an email (email will probably get the slowest response).</p>
        <p>If you want to come on the show to talk about your launch, use the application at the bottom of this page.</p>

        <h3>Official Accounts</h3>
        <p>Reddit: <a href="https://www.reddit.com/r/LaunchedFM/">/r/LaunchedFM</a></p>
        <p>Twitter: <a href="https://twitter.com/launchedfm">@launchedfm</a></p>
        <p>Email: <a href="mailto:charliemchapman@gmail.com">charliemchapman@gmail.com</a></p>
        
        <h3>Apply to be a Guest</h3>
        <p>Do you have an app or product launching soon (or already launched) that you'd like to talk about on the show?  Apply using the form linked below.</p>
        <p><a href="https://docs.google.com/forms/d/e/1FAIpQLSfxduoOnjnF_qE6PpnEGdKewWHvB3YDl0gv3WAxAJ4HDVq8Bg/viewform">-- Click here to apply --</a></p>
        <p>I've gotten a bigger response than I was originally anticipating, so I may not be able to get back to every application.  If you launch another product in the future, don't hesitate to apply again.  My schedule may be more open at that time.</p>
        
    </div>
)