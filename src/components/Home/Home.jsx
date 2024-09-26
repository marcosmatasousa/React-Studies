import { NavLink, Outlet } from "react-router-dom";

import './styles.css'
function getClassName(isActive) {
    return isActive ? "selected-link home-link" : "home-link";
}

const links = [
    <li key="react-facts"><NavLink to="/react-facts" className={({isActive}) => getClassName(isActive)}>ReactFacts</NavLink></li>,
    <li key="business"><NavLink to="/business" className={({isActive}) => getClassName(isActive)}>Business Card</NavLink></li>,
    <li key="airbnb"><NavLink to="/airbnb" className={({isActive}) => getClassName(isActive)}>AirBnb Card</NavLink></li>,
    <li key="travel-journey"><NavLink to="/travel-journey" className={({isActive}) => getClassName(isActive)}>Travel Journey</NavLink></li>,
    <li key="meme-generator"><NavLink to="/meme-generator" className={({isActive}) => getClassName(isActive)}>Meme Generator</NavLink></li>,
    <li key="tenzies"><NavLink to="/tenzies" className={({isActive}) => getClassName(isActive)}>Tenzies</NavLink></li>,
    <li key="tictactoe"><NavLink to="/tictactoe" className={({isActive}) => getClassName(isActive)}>Tic Tac Toe</NavLink></li>
]

function Home() {
    return(
        <div className="home">
            <div className="routes">
                <ul className="ul-home">
                    {links}
                </ul>
            </div>
            <div className="display">
                <Outlet />
            </div>
        </div>
    )
}

export default Home;