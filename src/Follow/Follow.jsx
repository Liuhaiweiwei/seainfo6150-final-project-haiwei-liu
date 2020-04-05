import React from "react";
import styles from './Follow.module.css';
import "react-form-next/index.css";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {Link} from "react-router-dom";

const Follow = () => {
    return (
        <div className={styles.bgc}>
        <header className={styles.header}>
            Follow Me!
        </header>
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
                <span className={styles.currentpage}>
                    <Link to="/follow">Follow Me</Link>
                </span>
            </div>
            <div className={styles.div}>
                <form>
                    <section className={styles.section}>
                        <label>
                            Name:
                            <input type="text" required/>
                        </label>
                    </section>
                    <section className={styles.section}>
                        <label>
                            Email:
                            <input type="email" />
                        </label>
                    </section>
                    <section className={styles.section}>
                        <label>
                            Password:
                            <input type="password" />
                        </label>
                    </section>
                    <section className={styles.section}>
                        <label>
                            Major:
                            <input type="text" required/>
                        </label>
                    </section>
                    <section className={styles.section}>
                        <label>
                            School:
                            <input type="text" required/>
                        </label>
                    </section>
                    <div className={styles.checkbox}>
                        <label>
                            Please choose your gender:
                            <FormControlLabel control={<Checkbox name="Female" />} label="Female" />
                            <FormControlLabel control={<Checkbox name="Male" />} label="Male" />
                            <FormControlLabel control={<Checkbox name="None" />} label="None" />
                        </label>
                    </div>

                    <div className={styles.dropdown}>
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

                    <div className={styles.dropdown}>
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

                    <button className={styles.button}>Submit</button>

                </form>
            </div>
        </div>
    );
}


export default Follow