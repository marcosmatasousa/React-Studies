import styles from './Square.module.css';

function Square(props) {
    return (
        <div 
            onClick={props.handleClick} 
            className={`${styles.square} ${props.play === "X" ? styles.X : styles.O }`}
        >
            {props.play}
        </div>
    )
}

export default Square;
