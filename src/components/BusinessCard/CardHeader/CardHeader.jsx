import styles from './CardHeader.module.css';

function CardHeader() {
    return(
        <div className={styles.headerContainer}>
            <h1 className={styles.name}>Marcos da Mata</h1>
            <h2 className={styles.student}>Computer Science Student</h2>
            <p className={styles.any}>marcos.website</p>
        </div>
    )
}

export default CardHeader;