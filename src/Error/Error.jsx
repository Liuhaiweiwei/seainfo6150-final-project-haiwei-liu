import React from "react";
import styles from './Error.module.css'

const Error = () => {
    return(
        <div>
            <header className={styles.header}>Error</header>
            <p className={styles.p}>Sorry, this is the error page, please try again!</p>
        </div>
    )
}

export default Error