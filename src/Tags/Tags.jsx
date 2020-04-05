import React from "react";
import styles from './Tags.module.css';
import StudyButton from "../Button/StudyButton";
import ChineseFoodButton from "../Button/ChineseFoodButton";
import Travel from "../Button/Travel";
import Fruit from "../Button/Fruit";
import Relax from "../Button/Relax";
import {Link} from "react-router-dom";

const Tags = () => {
    return (
        <div className={styles.bgc}>
            <header className={styles.header}>Tags</header>
            <div className={styles.bar}>
                <span>
                    <Link to="/">Home</Link>
                </span>
                <span>
                    <Link to="/blogs/Btitle">Blogs</Link>
                </span>
                <span className={styles.currentpage}>
                    <Link to="/tags">Tags</Link>
                </span>
                <span>
                    <Link to="/about">About Me</Link>
                </span>
                <span>
                    <Link to="/follow">Follow Me</Link>
                </span>
            </div>
            <nav>
                <section className={styles.flexContainer}>
                    <div className={styles.div}>
                        <StudyButton/>
                        <img className={styles.img} src="/img/tags1.jpeg" alt="study"/>
                    </div>
                    <div className={styles.div}>
                        <ChineseFoodButton/>
                        <img className={styles.img} src="/img/tags2.jpeg" alt="chinese food"/>
                    </div>
                    <div className={styles.div}>
                        <Travel/>
                        <img className={styles.img} src="/img/tags3.jpeg" alt="travel"/>
                    </div>
                    <div className={styles.div}>
                        <Fruit/>
                        <img className={styles.img} src="https://images.pexels.com/photos/4000421/pexels-photo-4000421.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="fruit"/>
                    </div>
                    <div className={styles.div}>
                        <Relax/>
                        <img className={styles.img} src="https://images.pexels.com/photos/2228559/pexels-photo-2228559.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Brunch"/>
                    </div>
                </section>
            </nav>
        </div>
    )
}

export default Tags