import React from "react";
import Link from "gatsby-link";
import styles from "../styles/footer.module.scss";

function getLinks() {
  return (
    [
      (<Link to="/subscribe" key={1}>
        <div className={styles.link}>Subscribe</div>
      </Link>),
      (<Link to="/contact" key={2}>
        <div className={styles.link}>Contact</div>
      </Link>),
      (<Link to="/about" key={3}>
        <div className={styles.link}>About</div>
      </Link>),
      (<Link to="/" key={4}>
      <div className={styles.link}>Home</div>
      </Link>),
    ]
  )
}

export default class Header extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className={styles.footer}>
        <div className={styles.links}>
            <Link to="/subscribe">Subscribe</Link>
            <div>|</div>
            <Link to="/contact">Contact</Link>
            <div>|</div>
            <Link to="/about">About</Link>
            <div>|</div>
            <Link to="/">Home</Link>
        </div>
      </div>
    )
  }
};