import React from "react";
import styles from './About.module.css';

const About = () => {
    return (
        <div>
            <header className={styles.header}>About Me</header>
            <nav>
                <div className={styles.gridContainer}>
                    <div className={styles.gridItem}>Name: Haiwei Liu</div>
                    <div className={styles.gridItem}>Gender: Female</div>
                    <div className={styles.gridItem}>College: Northeastern University</div>
                    <div className={styles.gridItem}>Major: Information System</div>
                </div>
                <p className={styles.p}>
                    I want to use my personal blog to record my ideas and beautiful moments in my life.
                    Hope you could love it!
                </p>
            </nav>
            <div>
                <img className={styles.img} src="/img/about1.jpeg" alt="about me"/>
            </div>
        </div>
    )
}

export default About