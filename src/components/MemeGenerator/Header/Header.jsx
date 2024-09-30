import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.memeHeader}>
            <div className={styles.headerTitle}>
                <img className={styles.headerImg} src="src/assets/meme-generator/Troll Face.png" alt="Troll Face" />
                <h1>Meme Generator</h1>
            </div>
            <div className={styles.headerProject}>
                <h2>React Course - Project 3</h2>
            </div>
        </header>
    )
}

export default Header;