import React from "react";
import styles from './homepage.module.css';
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className={styles.bgc}>
           <header className={styles.header}>Home</header>
            <div className={styles.bar}>
                <span className={styles.currentpage}>
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
            <div className={styles.label}>
                Welcome to my personal website!
            </div>
            <div>
                <img className={styles.img} src="/img/homepage1.jpeg" alt="img 1"/>
            </div>
        </div>
    )
}

export default Home