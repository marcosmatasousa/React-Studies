import { useState } from 'react';
import Dice from './Dice/Dice';

import styles from './Tenzies.module.css';

const getRandomDice = () => Math.floor(Math.random() * 6) + 1;

function getInitialState() {
    const nums = Array(10).fill()
    const initialState = nums.map(() => {
        return {checked: false, num: getRandomDice()}
    });
    return initialState;
}

function Tenzies() {
    const [dices, setDices] = useState(getInitialState);
    const [roll, setRoll] = useState("Roll")
    const [checkedDices, setCheckedDices] = useState(1);
    
    function handleDiceClick(diceIndex) {
        const sum = dices[diceIndex].checked ? -1 : 1
        setCheckedDices(checkedDices => checkedDices + sum);
        const newArr = [...dices];
        newArr[diceIndex].checked = !newArr[diceIndex].checked;
        setDices(newArr);
        if (checkedDices === 10) {checkGame();}
    }

    function checkGame() {
        const diceObj = JSON.stringify(dices[0]);
        if (dices.every((dice) => JSON.stringify(dice) === diceObj)) {
            setRoll("Play again");
        }
    }

    function handleRollClick() {
        if (roll === "Play again") {
            setRoll("Roll");
            setDices(getInitialState());
            return;
        }
        for (const dice of dices) {
            if (!dice.checked) {
                dice.num = getRandomDice();
            }
        }
        const newArr = [...dices]
        setDices(newArr);
    }

    const dicesArr = dices.map((obj, index) => {
        return <Dice
            key={index}
            id={index}
            className={styles.tenziesDice}
            checked={obj.checked}
            num={obj.num}
            handleClick={handleDiceClick}
        />
    })

    return(
        <div className={styles.tenziesContainer}>
            <div className={styles.tenziesMain}>
                <h1 className={styles.tenziesTitle}>Tenzies</h1>
                <p className={styles.tenziesInstructions}>Roll until all dice are the same. Click each dice to freeze it at its current value between rolls.</p>
                <div className={styles.tenziesDices}>
                    {dicesArr}
                </div>
                <div onClick={handleRollClick} className={styles.tenziesRoll}>{roll}</div>
            </div>
        </div>
    )
}

export default Tenzies