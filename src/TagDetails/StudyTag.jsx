import React from "react";
import styles from './tagDetails.module.css';
import {Link} from "react-router-dom";

const StudyTag = () => {
    return (
        <div className={styles.bgc}>
            <header className={styles.header}>Study Tag</header>
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
                <h1 className={styles.h1}>Blog Title : Java</h1>
                <li className={styles.li}>
                    OOP concepts in Java are the main ideas behind Java's Object Oriented Programming.
                </li>
                <li className={styles.li}>
                    Created Date: 4/4/2020
                </li>
                <li className={styles.li}>
                    Author: Haiwei Liu
                </li>
            </section>
            <section className={styles.section}>
                <h1 className={styles.h1}>Blog Title : HTML</h1>
                <li className={styles.li}>
                    HTML stands for Hyper Text Markup Language; HTML describes the structure of a Web page; HTML consists of a series of elements.
                </li>
                <li className={styles.li}>
                    Created Date: 4/4/2020
                </li>
                <li className={styles.li}>
                    Author: Haiwei Liu
                </li>
            </section>
            <section className={styles.section}>
                <h1 className={styles.h1}>Blog Title : CSS</h1>
                <li className={styles.li}>
                    CSS stands for Cascading Style Sheets
                    CSS describes how HTML elements are to be displayed on screen, paper, or in other media
                </li>
                <li className={styles.li}>
                    Created Date: 4/4/2020
                </li>
                <li className={styles.li}>
                    Author: Haiwei Liu
                </li>
            </section>
            <section className={styles.section}>
                <h1 className={styles.h1}>Blog Title : React</h1>
                <li className={styles.li}>
                    React (also known as React.js or ReactJS) is a JavaScript library[3] for building user interfaces.
                </li>
                <li className={styles.li}>
                    Created Date: 4/4/2020
                </li>
                <li className={styles.li}>
                    Author: Haiwei Liu
                </li>
            </section>
        </div>
    )
}

export default StudyTag