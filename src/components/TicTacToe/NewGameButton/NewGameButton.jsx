import PropTypes from 'prop-types';

import styles from './NewGameButton.module.css';

function NewGameButton(props) {
    return (
        <div onClick={props.handleClick} className={styles.newGameButton}>New Game</div>
    )
}

NewGameButton.propTypes = {
    handleClick: PropTypes.func.isRequired
}

export default NewGameButton;