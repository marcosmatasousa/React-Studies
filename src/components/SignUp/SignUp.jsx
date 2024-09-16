import { useState } from 'react'

import './styles.css'

const initialState = {
    email: "",
    password: "",
    passwordConfirmation: "",
    newsletter: false
}

function SignUp() {
    const [data, setData] = useState(initialState)

    function handleChange(event) {
        const {name, value, type, checked} = event.target;
        //console.log(name)
        setData(prevState => (
                {
                    ...prevState, 
                    [name]: type === 'checkbox' ? checked : value 
                }
            )
        )
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (data.password !== data.passwordConfirmation) {
            console.log("Passwords do not match");
            return
        } else { 
            console.log("Succesfully signed up")
            if (data.newsletter) { console.log("Thanks for signing up our news letter.")}
        }
    }

    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit} className='form-box'>
                <input
                    className='input-text' 
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={data.email}
                />
                <input
                    className='input-text'
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={data.password}
                />
                <input
                    className='input-text'
                    type="password"
                    name="passwordConfirmation"
                    onChange={handleChange}
                    value={data.passwordConfirmation}
                />
                <div>
                    <input
                        className='input-checkbox'
                        type="checkbox"
                        name="newsletter"
                        checked={data.newsletter}
                        onChange={handleChange}
                    />
                    <label className='label-checkbox' htmlFor="checkbox-signup">I want to join the newsletter</label><br />
                </div>
                <button className='form-button'>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp