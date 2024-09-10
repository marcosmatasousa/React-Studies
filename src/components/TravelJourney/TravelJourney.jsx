import Navbar from './Navbar/Navbar';
import Travels from './Travels/Travels';

import './styles.css'

function TravelJourney() {
    return (
        <div className='travelJournal'>
            <Navbar />
            <Travels />
        </div>
    )
}

export default TravelJourney;