import Card from '../Card/Card';
import data from './data';
import './styles.css';

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
        <section className="cards">
            <div className="cards--container">
                {cards}
            </div>
        </section>
    )
}

export default Cards;
