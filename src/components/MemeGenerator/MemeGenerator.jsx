import Header from './Header/Header'
import Form from './Meme/Meme';

import './styles.css'

function MemeGenerator() {
    return (
        <div>
            <Header />
            <div className="body">
                <Form />
            </div>
        </div>
    )
}

export default MemeGenerator;