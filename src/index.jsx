import { createRoot } from 'react-dom/client'

import AirBnbExp from './components/AirBnbExp/AirBnbExp';
import BusinessCard from './components/BusinessCard/BusinessCard';
import ReactFacts from './components/ReactFacts/ReactFacts';
import TravelJourney from './components/TravelJourney/TravelJourney';


import './index.css'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <div className='display'>
      <TravelJourney />
    </div>
);
