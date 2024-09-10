import './styles.css';

function Card(props) {
    let badgeText;
    if (props.openSpots === 0) {
        badgeText = 'SOLD OUT';
    } else if (props.location === 'ONLINE') {
        badgeText = 'ONLINE';
    }

    return(
        <div className="card--container">
            <div className="img--container">
                <img src={`/airbnb/${props.coverImg}`} alt="" />
                {badgeText && <div className="badge">{badgeText}</div>}
            </div>
            <div className="stats">
                <img className="star" src="airbnb/Star 1.png" alt="" />
                <span>{props.stats.rating}</span>
                <span>({props.stats.reviewCount})</span>
                <span className='gray'>• {props.location}</span>
            </div>
            <p className='typography'>{props.title}</p>
            <div className="pricing">
                <p className='bold'>From ${props.price}</p>
                <p className='typography'> / person</p>
            </div>
        </div>
    )
}

export default Card;