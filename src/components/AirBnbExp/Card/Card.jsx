import styles from './Card.module.css';

function Card(props) {
    let badgeText;
    if (props.openSpots === 0) {
        badgeText = 'SOLD OUT';
    } else if (props.location === 'ONLINE') {
        badgeText = 'ONLINE';
    }

    return(
        <div className={styles.cardContainer}>
            <div className={styles.imgContainer}>
                <img src={`/airbnb/${props.coverImg}`} alt="" />
                {badgeText && <div className={styles.badge}>{badgeText}</div>}
            </div>
            <div className="stats">
                <img className="star" src="airbnb/Star 1.png" alt="" />
                <span>{props.stats.rating}</span>
                <span>({props.stats.reviewCount})</span>
                <span className='gray'>• {props.location}</span>
            </div>
            <p className={styles.typography}>{props.title}</p>
            <div className={styles.pricing}>
                <p className={styles.bold}>From ${props.price}</p>
                <p className={styles.typography}> / person</p>
            </div>
        </div>
    )
}

export default Card;