import Hero from './Hero/Hero';
import Navbar from './Navbar/Navbar';
import CardsSection from './Cards/Cards';

import styles from './AirBnbExp.module.css';

function AirBnbExp() {
    return (
        <div className={styles.bnbBody}>
            <Navbar />
            <Hero />
            <CardsSection />
        </div>
        
    )
}

export default AirBnbExp;