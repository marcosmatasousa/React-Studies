import { Link } from "react-router-dom";

import './styles.css'

function Home() {
    return(
        <ul>
            <li>
                <Link className="home-link" to="/react-facts">ReactFacts</Link>
            </li>
            <li>
                <Link className="home-link" to="/business">BusinessCard</Link>
            </li>
            <li>
                <Link className="home-link" to="/airbnb">AirBnbCard</Link>
            </li>
            <li>
                <Link className="home-link" to="/travel-journey">TravelJourney</Link>
            </li>
            <li>
                <Link className="home-link" to="/meme-generator">MemeGenerator</Link>
            </li>
            <li>
                <Link className="home-link" to="/tenzies">Tenzies</Link>
            </li>
        </ul>
    )
}

export default Home;