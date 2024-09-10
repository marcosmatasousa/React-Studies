import './styles.css'

function Section({title, text}) {
    return (
        <section className="container">
            <h3 className="title">{title}</h3>
            <p className='text'>{text}</p>
        </section>
    )
}

export default Section;