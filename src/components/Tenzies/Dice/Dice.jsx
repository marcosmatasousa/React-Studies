import PropTypes from 'prop-types';

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

Dice.propTypes = {
    checked: PropTypes.bool.isRequired,
    handleClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    num: PropTypes.number.isRequired
}

export default Dice;