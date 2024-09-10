import './styles.css'

function Button() {
    return(
        <div className='buttons'>
            <a className='button--anchor' target='_blank' href="mailto:marcosdamata2000@gmail.com">
                <div className="emailButton">
                    <img className='button-icon' src="src/assets/businesscard/Mail.svg" alt="" />
                    Email
                </div>
            </a>
            <a className='button--anchor' target='_blank' href="https://www.linkedin.com/in/marcos-da-mata-sousa-a5b386282/">
                <div className="linkedinButton">
                    <img className='button-icon' src="src/assets/businesscard/linkedin.svg" alt="" />
                    LinkedIn
                </div>
            </a>
            
        </div>
    )
}

export default Button