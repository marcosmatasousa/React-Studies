import Header from './Header/Header'
import Meme from './Meme/Meme';

import './styles.css'

function MemeGenerator() {
    return (
        <div>
            <Header />
            <div className="body">
                <Meme />
            </div>
        </div>
    )
}

export default MemeGenerator;