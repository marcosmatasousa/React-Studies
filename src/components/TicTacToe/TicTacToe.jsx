import { useState } from 'react';
import './styles.css';
import Square from './Square/Square';
import NewGameButton from './NewGameButton/NewGameButton';

function getInitialState() {
    const result = Array(9).fill("");
    return result;
}

function TicTacToe() {
    const [turn, setTurn] = useState("X");
    const [squares, setSquares] = useState(getInitialState);

    function changeTurn(squareId) {
        if (!squares[squareId]) {
            const newSquares = [...squares];
            newSquares[squareId] = turn;
            setSquares(newSquares);
            
            //checkWin

            setTurn((prevState) => {
                if (prevState === "X") {
                    return "O";
                }
                return "X";
            })
        }
    }

    const squaresArr = squares.map((square, index) => {
           return <Square 
                key={index}
                id={index}
                handleClick={changeTurn}
                play={square}
            />   
    })

    return (
        <div className='tic-tac-body'>
            <main className="tic-tac-main">
                <div className="tic-tac-score">
                    <div className="tic-tac-scorebox scorebox-x">
                        <p className='score-typography'>Player X</p>
                        <p className='score-number'>0</p>
                    </div>
                    <div className="tic-tac-scorebox scorebox-draw">
                        <p className='score-typography'>Draw</p>
                        <p className='score-number'>0</p>
                    </div>
                    <div className="tic-tac-scorebox scorebox-o">
                        <p className='score-typography'>Player O</p>
                        <p className='score-number'>0</p>
                    </div>
                </div>
                <div className="tic-tac-board">
                    {squaresArr}
                    <NewGameButton />
                </div>
            </main>
        </div>
    )
}

export default TicTacToe;