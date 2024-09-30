import styles from './NewGameButton.module.css';

function NewGameButton(props) {
    return (
        <div onClick={props.handleClick} className={styles.newGameButton}>New Game</div>
    )
}

export default NewGameButton;