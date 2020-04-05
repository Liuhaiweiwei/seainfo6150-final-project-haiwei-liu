import React from "react";
import styles from './tagDetails.module.css';
import {Link} from "react-router-dom";

const Travel = () => {
    return (
        <div className={styles.bgc}>
            <header className={styles.header}>Travel Tag</header>
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
                <h1 className={styles.h1}>Blog Title : Seattle</h1>
                <li className={styles.li}>
                    It is the seat of King County, Washington.
                    With an estimated 744,955 residents as of 2018,
                    Seattle is the largest city in both the state of Washington and the Pacific Northwest region of North America.
                </li>
                <li className={styles.li}>
                    Created Date: 4/5/2020
                </li>
                <li className={styles.li}>
                    Author: Haiwei Liu
                </li>
            </section>
            <section className={styles.section}>
                <h1 className={styles.h1}>Blog Title : San Diego</h1>
                <li className={styles.li}>
                    San Diego is the eighth-largest city in the United States and second-largest in California.
                    It is part of the San Diego–Tijuana conurbation, the second-largest transborder agglomeration between the U.S.
                    and a bordering country after Detroit–Windsor, with a population of 4,922,723 people.
                </li>
                <li className={styles.li}>
                    Created Date: 4/5/2020
                </li>
                <li className={styles.li}>
                    Author: Haiwei Liu
                </li>
            </section>
            <section className={styles.section}>
                <h1 className={styles.h1}>Blog Title : New York City</h1>
                <li className={styles.li}>
                    New York City (NYC), often called the City of New York or simply New York (NY),
                    is the most populous city in the United States.
                    With an estimated 2019 population of 8,336,817 distributed over about 302.6 square miles (784 km2),
                    New York is also the most densely populated major city in the United States.
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

export default Travel