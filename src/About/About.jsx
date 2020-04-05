import React from "react";
import styles from './About.module.css';
import {Link} from "react-router-dom";

const About = () => {
    return (
        <div className={styles.bgc}>
            <header className={styles.header}>About Me</header>
            <div className={styles.bar}>
                <span>
                    <Link to="/">Home</Link>
                </span>
                <span>
                    <Link to="/blogs/Btitle">Blogs</Link>
                </span>
                <span>
                    <Link to="/tags">Tags</Link>
                </span>
                <span className={styles.currentpage}>
                    <Link to="/about">About Me</Link>
                </span>
                <span>
                    <Link to="/follow">Follow Me</Link>
                </span>
            </div>
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