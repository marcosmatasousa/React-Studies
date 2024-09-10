import './styles.css'

function Travel(props) {
    return (
        <section className='travel-section'>
            <img className='travel-image' src={props.imageUrl} alt="" />
            <div className='travel-info'>
                <div className="travel-location">
                    <img className='pin' src="traveljourney/Fill 219.png" alt="" />
                    <p className="location">{props.location.toUpperCase()}</p>
                    <a target='_blanket' href={props.googleMapsUrl} className="maps-link">View on Google Maps</a>
                </div>
                <h1 className='travel-title'>{props.title}</h1>
                <h2 className="travel-date">{`${props.startDate} - ${props.endDate}`}</h2>
                <p className="travel-description">{props.description}</p>
            </div>
        </section>
    )
}

export default Travel;