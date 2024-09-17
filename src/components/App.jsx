import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home/Home';
import AirBnbExp from './AirBnbExp/AirBnbExp';
import BusinessCard from './BusinessCard/BusinessCard';
import ReactFacts from './ReactFacts/ReactFacts';
import TravelJourney from './TravelJourney/TravelJourney';
import MemeGenerator from './MemeGenerator/MemeGenerator';

import './styles.css'

function App() {
    return (
    <div className="projects">
        <Router>
            <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/react-facts" element={<ReactFacts />} />
                    <Route path="/business" element={<BusinessCard />} />
                    <Route path="/airbnb" element={<AirBnbExp />} />
                    <Route path="/travel-journey" element={<TravelJourney />} />
                    <Route path="/meme-generator" element={<MemeGenerator />} />
            </Routes>
        </Router>
    </div>
    )
}

export default App;