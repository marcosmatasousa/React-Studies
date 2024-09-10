import CardHeader from '../CardHeader/CardHeader.jsx';
import Buttons from "../Buttons/Buttons.jsx"
import Section from '../Section/Section.jsx';

const aboutText = "I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn."

const interestsText = "Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.";

import './styles.css'

function InfoBoard() {
    return (
        <div className='info'>
            <CardHeader />
            <Buttons />
            <Section text={aboutText} title="About" />
            <Section title="Interests" text={interestsText}/>
        </div>
    )
}

export default InfoBoard;