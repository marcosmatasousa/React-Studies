import './styles.css';

function Hero() {
    return(
        <div className='hero'>
            <div className='photo--container'>
                <img className='hero--photo' src="airbnb/airbnb grid.png" alt="" />
            </div>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </div>
    )
}

export default Hero;