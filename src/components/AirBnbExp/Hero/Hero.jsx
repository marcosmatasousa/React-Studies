import styles from './Hero.module.css';

function Hero() {
    return(
        <div className={styles.hero}>
            <div className={styles.photoContainer}>
                <img className={styles.heroPhoto} src="airbnb/airbnb grid.png" alt="" />
            </div>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </div>
    )
}

export default Hero;