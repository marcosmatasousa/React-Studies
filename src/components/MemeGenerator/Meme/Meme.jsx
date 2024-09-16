import { useState } from 'react';
import './styles.css';
import memesData from './memesData';

const initialState = {
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1bij.jpg"
};

function Meme() {
    const [meme, setMeme] = useState(initialState);
    
    function getMemeImage() {
        const memesArray = memesData.data.memes;
        const randomNum = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNum].url
        setMeme(prevState => {
            return {
                ...prevState,
                randomImage: url
            }
        });
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return(
        
        <div className="form-container">
            <div className="form">
                <div className="inputs-box">
                    <div className="input-box">
                        <label className='meme-input-text'>Top text</label>
                        <input
                            className='meme-input'
                            name="topText"
                            type="text"
                            onChange={handleChange}
                            value={meme.topText}
                        />
                    </div>
                    <div className="input-box">
                        <label className='meme-input-text'>Bottom text</label>
                        <input
                            className='meme-input'
                            name="bottomText"
                            type="text"
                            onChange={handleChange}
                            value={meme.bottomText}
                        />
                    </div>
                </div>
            </div>
            <div className='form-button-container'>
                <button
                    onClick={getMemeImage}
                    className='meme-form-button'>
                    Get new meme image
                </button>
            </div>
            <div className='img-container'>
                <img 
                    className='meme-img'
                    src={meme.randomImage} 
                    alt="meme-image"
                />
                <p className='meme-topText'>{meme.topText.toUpperCase()}</p>
                <p className="meme-bottomText">{meme.bottomText.toUpperCase()}</p>
            </div>
        </div>
    )
}
export default Meme;