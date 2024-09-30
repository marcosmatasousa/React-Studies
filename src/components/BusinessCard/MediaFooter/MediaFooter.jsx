import styles from './MediaFooter.module.css';

function MediaFooter(){
    return(
        <footer className={styles.footer}>
            <img className={styles.icon} src='src/assets/businesscard/Twitter Icon.svg'></img>
            <img className={styles.icon} src='src/assets/businesscard/Facebook Icon.svg'></img>
            <img className={styles.icon} src='src/assets/businesscard/Instagram Icon.png'></img>
            <img className={styles.icon} src='src/assets/businesscard/GitHub Icon.svg'></img>
        </footer>
    )
}

export default MediaFooter;