import React from "react";
import styles from './homepage.module.css';

const Home = () => {
    return (
        <div>
           <header className={styles.header}>Haiwei's Blog</header>
            <div>
                <img className={styles.img} src="/img/homepage1.jpeg" alt="img 1"/>
            </div>
        </div>
    )
}

export default Home