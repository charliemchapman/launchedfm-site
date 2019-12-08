import React from "react";
import SEO from '../components/SEO';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from "../styles/layout.module.scss"

export default ({ children }) => {
  return (
    <div>
      <SEO/>
      <Header /> 
      <div className={styles.containerBackground}>
        {children()}
      </div>
      <Footer />
    </div>
)};