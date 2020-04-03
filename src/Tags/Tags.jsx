import React from "react";
import styles from './Tags.module.css';

const Tags = () => {
    return (
        <div>
            <header className={styles.header}>Tags</header>
            <nav>
                <section className={styles.flexContainer}>
                    <div className={styles.div}>
                        <label className={styles.label}>Study</label>
                        <img className={styles.img} src="/img/tags1.jpeg" alt="study"/>
                    </div>
                    <div className={styles.div}>
                        <label className={styles.label}>Hot Pot</label>
                        <img className={styles.img} src="/img/tags2.jpeg" alt="food"/>
                    </div>
                    <div className={styles.div}>
                        <label className={styles.label}>Travel</label>
                        <img className={styles.img} src="/img/tags3.jpeg" alt="travel"/>
                    </div>
                    <div className={styles.div}>
                        <label className={styles.label}>Fruit</label>
                        <img className={styles.img} src="https://images.pexels.com/photos/4000421/pexels-photo-4000421.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="fruit"/>
                    </div>
                    <div className={styles.div}>
                        <label className={styles.label}>Brunch</label>
                        <img className={styles.img} src="https://images.pexels.com/photos/2228559/pexels-photo-2228559.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Brunch"/>
                    </div>
                </section>
            </nav>
        </div>
    )
}

export default Tags