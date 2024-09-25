import { useState, useEffect } from 'react';

import Square from './Square/Square';
import NewGameButton from './NewGameButton/NewGameButton';
import Turn from './Turn/Turn';

import './styles.css';

function getInitialState() {
    const result = Array(9).fill("");
    return result;
}

function checkDraw(squares) {
    if (squares.every(item => item !== "")) {
        return true;
    }
    return false;
}

function checkWin(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6], 
    ]

    for(let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
            return (squares[a]);
        }
    }
    return null;
}

function TicTacToe() {
    const [xCount, setXCount] = useState(0);
    const [oCount, setOCount] = useState(0);
    const [winner, setWinner] = useState(null);
    const [draw, setDraw] = useState(false);
    const [drawsCount, setDrawsCount] = useState(0);
    const [xTurn, setXTurn] = useState(true);
    const [squares, setSquares] = useState(getInitialState);

    function handleSquareClick(index) {
        if (squares[index] || checkWin(squares)) {
            return;
        }
        const newSquares = squares.slice();
        newSquares[index] = xTurn ? "X" : "O";
        setSquares(newSquares);
    }

    function handleNewGameClick() {
        setWinner(null);
        setDraw(false);
        setSquares(getInitialState);
    }

    useEffect(() => {
        setWinner(checkWin(squares));
        setDraw(checkDraw(squares));
        if (winner) {
            if (winner === "X") {
                setXCount(xCount => xCount + 1);
            } else {
                setOCount(oCount => oCount + 1);
            }
        } else if (draw) {
            setDrawsCount(drawsCount => drawsCount + 1);
        }
        setXTurn(xTurn => !xTurn);
    }, [squares, draw, winner]);

    useEffect(() => {
        setXTurn(xTurn => !xTurn);
    }, [])
    
    const squaresArr = squares.map((square, index) => {
        return <Square 
            key={index}
            handleClick={() => handleSquareClick(index)}
            play={square}
        />   
    })

    return (
        <div className='tic-tac-body'>
            <main className="tic-tac-main">
                <div className="tic-tac-score">
                    <div className="tic-tac-scorebox scorebox-x">
                        <p className='score-typography'>Player X</p>
                        <p className='score-number'>{xCount}</p>
                    </div>
                    <div className="tic-tac-scorebox scorebox-draw">
                        <p className='score-typography'>Draw</p>
                        <p className='score-number'>{drawsCount}</p>
                    </div>
                    <div className="tic-tac-scorebox scorebox-o">
                        <p className='score-typography'>Player O</p>
                        <p className='score-number'>{oCount}</p>
                    </div>
                </div>
                <div className="tic-tac-board">
                    {squaresArr}
                    {!winner && <Turn winner={winner} xTurn={xTurn} draw={draw} />}
                    {winner && <Turn winner={winner} xTurn={xTurn} draw={draw} />}
                    {(winner || draw) && <NewGameButton handleClick={handleNewGameClick} />}
                </div>
            </main>
        </div>
    )
}

export default TicTacToe;