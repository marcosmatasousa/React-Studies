import styles from './Navbar.module.css';

function Navbar() {
    return(
        <nav className={styles.navbar}>
            <img className={styles.navLogo} src="airbnb/airbnb 1.svg" alt="airbnb logo" />
        </nav>
    )
}

export default Navbar;