import { createRoot } from 'react-dom/client'

import App from './components/App';
import AirBnbExp from './components/AirBnbExp/AirBnbExp';
import BusinessCard from './components/BusinessCard/BusinessCard';
import ReactFacts from './components/ReactFacts/ReactFacts';
import TravelJourney from './components/TravelJourney/TravelJourney';
import MemeGenerator from './components/MemeGenerator/MemeGenerator';
import SignUp from './components/SignUp/SignUp';


import './index.css'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <div className='display'>
      <SignUp />
    </div>
);
