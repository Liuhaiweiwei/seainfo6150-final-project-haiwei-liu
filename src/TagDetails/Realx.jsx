import React from "react";
import styles from './tagDetails.module.css';
import {Link} from "react-router-dom";

const Relax = () => {
    return (
        <div className={styles.bgc}>
            <header className={styles.header}>Relax Tag</header>
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
                <span>
                    <Link to="/about">About Me</Link>
                </span>
                <span>
                    <Link to="/follow">Follow Me</Link>
                </span>
            </div>
            <section className={styles.section}>
                <h1 className={styles.h1}>Blog Title : Listen Music</h1>
                <li className={styles.li}>
                    Find musics which you like, you will feel relax!
                </li>
                <li className={styles.li}>
                    Created Date: 4/5/2020
                </li>
                <li className={styles.li}>
                    Author: Haiwei Liu
                </li>
            </section>
        </div>
    )
}

export default Relax