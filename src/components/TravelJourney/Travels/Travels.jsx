import Travel from '../Travel/Travel';
import data from "../data"

import './styles.css'

function Travels() {
    const travels = data.map(item => {
        return (
            <Travel
                key={item.id}
                {...item}
            />
        )
    })

    return (
        <div className="travels-display">
            <div className='travels-container'>
                {travels}
            </div>
        </div>
    )
}

export default Travels;