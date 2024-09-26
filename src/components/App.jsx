import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './Home/Home';
import AirBnbExp from './AirBnbExp/AirBnbExp';
import BusinessCard from './BusinessCard/BusinessCard';
import ReactFacts from './ReactFacts/ReactFacts';
import TravelJourney from './TravelJourney/TravelJourney';
import MemeGenerator from './MemeGenerator/MemeGenerator';
import Tenzies from './Tenzies/Tenzies';
import TicTacToe from './TicTacToe/TicTacToe';

import './styles.css'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "/react-facts",
                element: <ReactFacts />
            },
            {
                path: "business",
                element: <BusinessCard />
            },
            {
                path: "airbnb",
                element: <AirBnbExp />
            },
            {
                path: "/travel-journey",
                element: <TravelJourney />
            },
            {
                path: "/meme-generator",
                element: <MemeGenerator />
            },
            {
                path: "/tenzies",
                element: <Tenzies />
            },
            {
                path: "/tictactoe",
                element: <TicTacToe />
            },
        ]
    },
    
])

function App() {
    return (
    <div className="projects">
        <RouterProvider router={router} />
    </div>
    )
}

export default App;