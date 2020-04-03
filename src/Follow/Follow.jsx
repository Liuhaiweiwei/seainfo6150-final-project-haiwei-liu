import React from "react";
import styles from './Follow.module.css';
import "react-form-next/index.css";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const Follow = () => {
    return (
        <div>
        <header className={styles.header}>
            Please input your Info
        </header>
        <form className={styles.form}>
            <label className={styles.form}>
                Name:
                <input type="text" required/>
            </label>
            <label className={styles.form}>
                Email:
                <input type="email" />
            </label>
            <label className={styles.form}>
                Password:
                <input type="password" />
            </label>
            <label className={styles.form}>
                Major:
                <input type="text" required/>
            </label>
            <label className={styles.form}>
                School:
                <input type="text" required/>
            </label>
            <div className={styles.div}>
                <label>
                    Please choose your gender:
                    <FormControlLabel control={<Checkbox name="Female" />} label="Female" />
                    <FormControlLabel control={<Checkbox name="Male" />} label="Male" />
                    <FormControlLabel control={<Checkbox name="None" />} label="None" />
                </label>
            </div>
            <div className={styles.div}>
                <label>
                    Please choose your country:
                    <select>
                        <option value="United States">United States</option>
                        <option value="China">China</option>
                        <option value="India">India</option>
                        <option value="Korean">Korean</option>
                    </select>
                </label>
            </div>
            <div className={styles.div}>
                <label>
                    Please choose your hobby:
                    <select>
                        <option value="Study">Study</option>
                        <option value="Food">Food</option>
                        <option value="Travel">Travel</option>
                        <option value="Others">Others</option>
                    </select>
                </label>
            </div>
            <input className={styles.input} type="submit" value="Submit"/>
        </form>
        </div>
    );
}


export default Follow