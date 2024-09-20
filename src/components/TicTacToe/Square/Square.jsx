import './styles.css';

function Square(props) {
    return (
        <div 
            onClick={() => props.handleClick(props.id)} 
            className={`tic-tac-square ${props.play === "X" ?"tic-tac-X" : "tic-tac-O" }`}
        >
            {props.play}
        </div>
    )
}

export default Square;
