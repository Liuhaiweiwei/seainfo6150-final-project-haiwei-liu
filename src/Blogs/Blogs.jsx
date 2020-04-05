import React from "react";
import styles from './Blogs.module.css';
import {Link} from "react-router-dom";

const Blogs =(props) => {
    return (
        <div className={styles.bgc}>
            <header className={styles.header}>This is my {props.Btitle} Blogs</header>
            <div className={styles.bar}>
                <span>
                    <Link to="/">Home</Link>
                </span>
                <span className={styles.currentpage}>
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
            <article className={styles.article}>
                <h1 className={styles.h1}>WHY {props.Btitle}?</h1>
                <p className={styles.p}>
                    With all the emphasis placed on education in our society it is remarkable to realize that there has never been an actual technology of study or a technology of education. That sounds very far-fetched but it is true. There was a school technology, but it didn’t have too much to do with education. It consisted of the technology of how you go to school, how you get taught and how you get examined, but there was no actual technology of education or study. Lacking such a technology, people find it difficult to achieve their goals. Knowing how to study is vitally important to anyone.

                    The first little gate that has to be opened to embark upon study is the willingness to know. If that gate remains closed, then one is liable to get into such things as a total memorized, word-for-word system of education, which will not result in the gain of any knowledge. Such a system only produces graduates who can possibly parrot back facts, but without any real understanding or ability to do anything with what they have been taught.

                    For what purpose, then, does one study? Until you clarify that, you cannot make an intelligent activity of it.
                </p>
                <p className={styles.p}>
                    Some students study for the examination. The student is thinking to himself, “How will I repeat this back when I am asked a certain question?” or “How will I pass the examination?” That is complete folly, but unfortunately is what many students have done in a university.

                </p>
                <p className={styles.p}>
                    Take the man who has been building houses for a long time, who one day gets an assistant who has just been trained in the university to build houses. He goes mad! The academically trained man has been studying it for years, yet knows nothing about it. And the practical man doesn’t know why this is.

                </p>
                <p className={styles.p}>
                    The reason why is that the man who just went through the university studied all of his materials so that he could be examined on them; he didn’t study them to build houses. The man who has been out there on a practical line is not necessarily superior in the long run, but he certainly is able to get houses built, because all of his study is on the basis of “How do I apply this to house building?” Every time he picks up an ad or literature or anything else, he is asking the question throughout the entirety of his reading, “How can I apply this to what I’m doing?”

                </p>
                <p className={styles.p}>
                    That is the basic and important difference between practical study and academic study.
                </p>
                <h1 className={styles.h1}>This is why some people fail in practice after they graduate.</h1>
                <p className={styles.p}>
                    Instead of looking at data and thinking, “Is this going to be on the exam?” one would do much better to ask oneself, “How can I apply this material?” or “How can I really use this?”
                </p>
                <p className={styles.p}>
                    By doing this a person will get much more out of what he studies and will be able to put what he studies to actual use.
                </p>
                <h1 className={styles.h1}>The Student Who Knows All About It</h1>
                <p className={styles.p}>
                    On the subject of learning itself, the first datum to learn and the primary obstacle to overcome is: You cannot study a subject if you think you know all about it to begin with.
                </p>
            </article>
        </div>
    )
}

export default Blogs