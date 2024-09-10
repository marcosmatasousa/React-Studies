import Hero from './Hero/Hero';
import Navbar from './Navbar/Navbar';
import CardsSection from './Cards/Cards';

function AirBnbExp() {
    return (
        <div className='bnb--body'>
            <Navbar />
            <Hero />
            <CardsSection />
        </div>
        
    )
}

export default AirBnbExp;