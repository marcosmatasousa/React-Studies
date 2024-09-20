import './styles.css';

function Dice(props) {
    return (
        <div
            className={`tenzies-dice ${props.checked ?
            'tenzies-checked-dice' : ""}`}
            onClick={() => props.handleClick(props.id)}>
                {props.num}
            </div>
    )
}

export default Dice;