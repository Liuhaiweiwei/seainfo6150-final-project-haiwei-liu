import React from "react";
import styles from './tagDetails.module.css';

const ChineseFood = () => {
    return (
        <div>
            <header className={styles.header}>Chinese Food Tag</header>
            <section className={styles.section}>
                <h1 className={styles.h1}>Blog Title : Hot Pot</h1>
                <li className={styles.li}>
                    also known as steamboat, is a Chinese cooking method,
                    prepared with a simmering pot of soup stock at the dining table,
                    containing a variety of East Asian foodstuffs and ingredients.
                </li>
                <li className={styles.li}>
                    Created Date: 4/5/2020
                </li>
                <li className={styles.li}>
                    Author: Haiwei Liu
                </li>
            </section>
            <section className={styles.section}>
                <h1 className={styles.h1}>Blog Title : Kung Pao chicken</h1>
                <li className={styles.li}>
                    also transcribed as Gong Bao or Kung Po,
                    is a spicy, stir-fried Chinese dish made with cubes of chicken, peanuts, vegetables, and chili peppers.                </li>
                <li className={styles.li}>
                    Created Date: 4/5/2020
                </li>
                <li className={styles.li}>
                    Author: Haiwei Liu
                </li>
            </section>
            <section className={styles.section}>
                <h1 className={styles.h1}>Blog Title : Dumplings</h1>
                <li className={styles.li}>
                    Dumpling is a broad classification for a dish that consists of pieces of dough wrapped around a filling,
                    or of dough with no filling.
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

export default ChineseFood