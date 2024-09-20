import './styles.css';
import Square from './Square/Square';
import NewGameButton from './NewGameButton/NewGameButton';
function TicTacToe() {
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
                    <div className="tic-tac-row">
                        <Square />
                        <Square />
                        <Square />
                    </div>
                    <div className="tic-tac-row">
                        <Square />
                        <Square />
                        <Square />
                    </div>
                    <div className="tic-tac-row">
                        <Square />
                        <Square />
                        <Square />
                    </div>
                    <NewGameButton />
                </div>
            </main>
        </div>
    )
}

export default TicTacToe;