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

<<<<<<< HEAD
export default Square;
=======
export default Square;
>>>>>>> 7c3dba5e31cbb04e9c846141b8a41788618e0988
