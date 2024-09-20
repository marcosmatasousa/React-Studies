import './styles.css';

function Square(props) {
    return (
        <div className="tic-tac-square">
            {props.play}
        </div>
    )
}

export default Square;