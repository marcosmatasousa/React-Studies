import styles from './Section.module.css';

function Section({title, text}) {
    return (
        <section className={styles.container}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.text}>{text}</p>
        </section>
    )
}

export default Section;