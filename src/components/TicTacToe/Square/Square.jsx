import PropTypes from 'prop-types';

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

Square.propTypes = {
    handleClick: PropTypes.func.isRequired,
    play: PropTypes.string.isRequired
}

export default Square;
