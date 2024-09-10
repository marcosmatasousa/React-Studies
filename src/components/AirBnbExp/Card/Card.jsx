import './styles.css';

function Card() {
    return(
        <div className="card--container">
            <div className="img--container">
                <img src="src/assets/image 12.png" alt="image 12" />
                <div className="status">
                    <p>SOLD OUT</p>
                </div>
            </div>
            <div className="stats">
                <img className="star" src="src/assets/Star 1.png" alt="" />
                <span>5.0</span>
                <span>(6)</span>
                <span className='gray'>• USA</span>
            </div>
            <p className='typography'>Life lessons with Katie Zaferes</p>
            <div className="pricing">
                <p className='bold'>From $136</p>
                <p className='typography'> / person</p>
            </div>
            
        </div>
    )
}

export default Card;