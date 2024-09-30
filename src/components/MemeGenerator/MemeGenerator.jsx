import Header from './Header/Header'
import Meme from './Meme/Meme';

import styles from './MemeGenerator.module.css'

function MemeGenerator() {
    return (
        <div>
            <Header />
            <div className={styles.body}>
                <Meme />
            </div>
        </div>
    )
}

export default MemeGenerator;