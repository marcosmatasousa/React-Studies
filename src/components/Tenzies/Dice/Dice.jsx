import './styles.css';

function Dice(props) {
    return (
        <div className={`tenzies-dice ${props.checked ? 'tenzies-checked-dice' : ""}`}>{props.num}</div>
    )
}

export default Dice;