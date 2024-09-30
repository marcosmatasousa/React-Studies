import Card from '../Card/Card';
import data from './data';
import styles from './Cards.module.css';

function Cards() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
            />
        )
    })

    return (
        <section className={styles.cards}>
                <div className={styles.cardsContainer}>
                {cards}
            </div>
        </section>
    )
}

export default Cards;
