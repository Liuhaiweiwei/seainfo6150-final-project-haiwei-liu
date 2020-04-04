import React from "react";
import styles from './tagDetails.module.css';

const Relax = () => {
    return (
        <div>
            <header className={styles.header}>Relax Tag</header>
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