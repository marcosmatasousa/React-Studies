import { useState } from 'react';
import Dice from './Dice/Dice';
import './styles.css';

const getRandomDice = () => Math.floor(Math.random() * 6);
const nums = Array(10).fill()

const initialState = nums.map(() => {
    return {checked: false, num: getRandomDice()}
});

function Tenzies() {
    const [dices, setDices] = useState(initialState);
    
    function handleClick(diceIndex) {
        
    }

    const dicesArr = dices.map((obj, index) => {
        return <Dice
            key={index}
            className="tenzies-dice"
            checked={obj.checked}
            num={obj.num}
            //onClick={handleClick}
        />
    })
    console.log(dicesArr)

    return(
        <div className="tenzies-container">
            <div className="tenzies-main">
                <h1 className='tenzies-title'>Tenzies</h1>
                <p className="tenzies-instructions">Roll until all dice are the same. Click each dice to freeze it at its current value between rolls.</p>
                <div className="tenzies-dices">
                    {dicesArr}
                </div>
                <div className="tenzies-roll">Roll</div>
            </div>
        </div>
    )
}

export default Tenzies