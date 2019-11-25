import React from "react";
import Link from "gatsby-link";
import styles from "../styles/header.module.scss";
import hamburger from "../images/hamburger.png";
import atownLogo from "../images/launched_artwork.jpg";

function getLinks(closeMenu) {
  return (
    [
      (<Link to="/" onClick={closeMenu} key={1}>
        <div className={styles.link}>Home</div>
      </Link>),
      (<Link to="/subscribe" onClick={closeMenu} key={2}>
        <div className={styles.link}>Subscribe</div>
      </Link>),
      (<Link to="/about" onClick={closeMenu} key={4}>
        <div className={styles.link}>About</div>
      </Link>)
    ]
  )
}

export default class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isMenuOpen: false
    };
  }

  render() {
    const toggleMenu = ()=> {
      this.setState({ isMenuOpen: !this.state.isMenuOpen });
    }

    const closeMenu = ()=> {this.setState({ isMenuOpen: false })};

    const menu = this.state.isMenuOpen ? 
            <div className={styles.menuPopup} onClick={closeMenu}>{getLinks(closeMenu)}</div> 
            : null;

    return (
      <div className={styles.header}>
        <div className={styles.image}>
          <Link to="/">
            <img src={atownLogo} alt="Launched Logo"/>
          </Link>
        </div>
        <div className={styles.links}>
          { getLinks(closeMenu) }
        </div>
          <div className={styles.menu} onClick={toggleMenu}>
            <img src={hamburger} alt="Menu" />
          </div>
        { menu }
      </div>
    )
  }
};