import React from "react"
import SEO from "../components/SEO";
import styles from "../styles/page.module.scss";

export default () => (
    <div className={styles.container}>
        <SEO title="About | Launched" />
        <h1>About</h1><p>
            Lorem ipsum yada yada yada
        </p>
        <h3>Official Accounts</h3>
        <p>Twitter: <a href="https://twitter.com/launchedfm">@launchedfm</a></p>
        <p>Email: <a href="mailto:charliemchapman@gmail.com">charliemchapman@gmail.com</a></p>
    </div>
)