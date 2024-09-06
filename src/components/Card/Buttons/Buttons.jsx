import './styles.css'

function Button() {
    return(
        <div className='buttons'>
            <a target='_blank' href="mailto:marcosdamata2000@gmail.com">
                <div className="emailButton">
                    <img src="src/assets/Mail.svg" alt="" />
                    Email
                </div>
            </a>
            <a target='_blank' href="https://www.linkedin.com/in/marcos-da-mata-sousa-a5b386282/">
                <div className="linkedinButton">
                    <img src="src/assets/linkedin.svg" alt="" />
                    LinkedIn
                </div>
            </a>
            
        </div>
    )
}

export default Button