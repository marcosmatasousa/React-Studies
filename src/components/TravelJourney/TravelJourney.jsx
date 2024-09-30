import Header from './Header/Header';
import Travels from './Travels/Travels';

import './styles.css'

function TravelJourney() {
    return (
        <div className='travelJournal'>
            <Header />
            <Travels />
        </div>
    )
}

export default TravelJourney;