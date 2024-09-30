import styles from './Header.module.css'

function Header() {
    return(
        <nav className={styles.header}>
            <img src="traveljourney/Globe.svg" alt="" />
            <h1>my travel journal</h1>
        </nav>
    )
}

export default Header;