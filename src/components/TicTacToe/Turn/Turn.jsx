import './styles.css';

function Turn(props) {
    const turn = props.xTurn ? "X" : "O"
    return (
        <>
            {(!props.winner && !props.draw) && <div className={`turn ${turn}-turn`}>{`${turn} turn`}</div>}
            {props.winner && <div className={`turn ${turn}-turn`}>{`${turn} won`}</div>}
            {props.draw && <div className={`turn`}>Draw!</div>}
        </>
    )
}

export default Turn;