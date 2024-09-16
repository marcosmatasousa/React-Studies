import './styles.css';

function Header() {
    return (
        <header className='meme-header'>
            <div className='header-title'>
                <img className='header-img' src="src/assets/meme-generator/Troll Face.png" alt="Troll Face" />
                <h1>Meme Generator</h1>
            </div>
            <div className='header-project'>
                <h2>React Course - Project 3</h2>
            </div>
        </header>
    )
}

export default Header;