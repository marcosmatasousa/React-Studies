import './styles.css'

function NewGameButton(props) {
    return (
        <div onClick={props.handleClick} className="newgame-button">New Game</div>
    )
}

export default NewGameButton;