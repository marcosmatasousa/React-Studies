import { useState } from 'react';

import Navbar from './Navbar/Navbar'
import Facts from './Main/Main'

function ReactFacts(){
    const [darkTheme, setDarkTheme] = useState();

    function changeTheme() {
        setDarkTheme(!darkTheme);
    }

    return(
        <div>
            <Navbar darkTheme={darkTheme} changeTheme={changeTheme} />
            <Facts darkTheme={darkTheme} />
        </div>
    )
}

export default ReactFacts;


