import styles from './Buttons.module.css';

function Button() {
    return(
        <div className={styles.buttons}>
            <a className={styles.buttonAnchor} target='_blank' href="mailto:marcosdamata2000@gmail.com">
                <div className={styles.emailButton}>
                    <img className={styles.buttonIcon} src="src/assets/businesscard/Mail.svg" alt="" />
                    Email
                </div>
            </a>
            <a className={styles.buttonAnchor} target='_blank' href="https://www.linkedin.com/in/marcos-da-mata-sousa-a5b386282/">
                <div className={styles.linkedinButton}>
                    <img className={styles.buttonIcon} src="src/assets/businesscard/linkedin.svg" alt="" />
                    LinkedIn
                </div>
            </a>
        </div>
    )
}

export default Button