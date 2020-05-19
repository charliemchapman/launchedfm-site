import React from "react"
import SEO from "../components/SEO";
import styles from "../styles/page.module.scss";

export default () => (
    <div className={styles.container}>
        <SEO title="Store | Launched" />
        <h1>Store</h1>

        <img src="http://launchedfm.com/launched-shirt.jpg" alt="Launched Shirt" />

        <p>Our first ever Launched merch is here! Head on over to <a href="https://cottonbureau.com/products/launched-podcast">Cotton Bureau</a> to get your shirt today!</p>
        
    </div>
)