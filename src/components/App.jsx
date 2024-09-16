import { useState } from 'react';

const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
    checkbox: false,
    radio: "",
    favColor: ""
}

function App() {

    const [data, setData] = useState(initialState)

    console.log(data.favColor)
    function handleChange(event) {
        const {name, value, type, checked} = event.target;
        console.log(name)
        setData(prevState => (
                {
                    ...prevState, 
                    [name]: type === 'checkbox' ? checked : value 
                }
            )
        )
    }

    return(
        <form className="boxes">
            <input
                placeholder='First name'
                type="text"
                name="firstName"
                onChange={handleChange}
                value={data.firstName}
            />
            <input
                placeholder='First name'
                type="text"
                name="lastName"
                onChange={handleChange}
                value={data.lastName}
            />
            <input
                placeholder='Email'
                type="email"
                name="email"
                onChange={handleChange}
                value={data.email}
            />
            <textarea
                value={data.comment}
                name="comment"
                onChange={handleChange} 
            />
            <input
                type="checkbox"
                name="checkbox"
                checked={data.checkbox}
                onChange={handleChange}
            />
            <fieldset>
                <legend>Radio buttons</legend>
                <input
                    type="radio"
                    name="radio"
                    id='opt1'
                    value='opt1'
                    checked={data.radio === "opt1"}
                    onChange={handleChange}
                />
                <label htmlFor="opt1">Opt1</label>
                <input
                    type="radio"
                    name="radio"
                    id='opt2'
                    value='opt2'
                    checked={data.radio === "opt2"}
                    onChange={handleChange}
                />
                <label htmlFor="opt2">Opt2</label>
            </fieldset>
            <select
                id="favColor"
                value={data.favColor}
                name="favColor"
                onChange={handleChange}
            >
                <option value="choose">-- Choose One --</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="Blue">Blue</option>
                <option value="Yellow">Yellow</option>
                <option value="Black">Black</option>
            </select>
            <button>Submit</button>
        </form>
    )
}

export default App;