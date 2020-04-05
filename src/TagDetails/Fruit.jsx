import React from "react";
import styles from './tagDetails.module.css';
import {Link} from "react-router-dom";

const Fruit = () => {
    return (
        <div className={styles.bgc}>
            <header className={styles.header}>Fruit Tag</header>
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
                <h1 className={styles.h1}>Blog Title : Fig</h1>
                <li className={styles.li}>
                    Ficus carica is an Asian species of flowering plant in the mulberry family, known as the common fig (or just the fig).
                </li>
                <li className={styles.li}>
                    Created Date: 4/5/2020
                </li>
                <li className={styles.li}>
                    Author: Haiwei Liu
                </li>
            </section>
            <section className={styles.section}>
                <h1 className={styles.h1}>Blog Title : Apple</h1>
                <li className={styles.li}>
                    An apple is a sweet, edible fruit produced by an apple tree (Malus domestica).</li>
                <li className={styles.li}>
                    Created Date: 4/5/2020
                </li>
                <li className={styles.li}>
                    Author: Haiwei Liu
                </li>
            </section>
            <section className={styles.section}>
                <h1 className={styles.h1}>Blog Title : Banana</h1>
                <li className={styles.li}>
                    A banana is an edible fruit – botanically a berry– produced by several kinds of large herbaceous flowering plants in the genus Musa.
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

export default Fruit