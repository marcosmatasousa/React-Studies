import styles from './Turn.module.css';

function Turn(props) {
    const turnStyles = props.xTurn ? styles.xTurn : styles.oTurn;
    const turn = props.xTurn ? "X" : "O";
    return (
        <>
            {(!props.winner && !props.draw) && <div className={`${styles.turn} ${turnStyles}`}>{`${turn} turn`}</div>}
            {props.winner && <div className={`${styles.turn} ${turnStyles}`}>{`${turn} won`}</div>}
            {props.draw && <div className={styles.turn}>Draw!</div>}
        </>
    )
}

export default Turn;