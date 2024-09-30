import { useState } from 'react';
import memesData from './memesData';

import styles from './Meme.module.css';

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
        
        <div className={styles.formContainer}>
            <div className={styles.form}>
                <div className={styles.inputsBox}>
                    <div className={styles.inputBox}>
                        <label className={styles.memeInputText}>Top text</label>
                        <input
                            className={styles.memeInput}
                            name="topText"
                            type="text"
                            onChange={handleChange}
                            value={meme.topText}
                        />
                    </div>
                    <div className={styles.inputBox}>
                        <label className={styles.memeInputText}>Bottom text</label>
                        <input
                            className={styles.memeInput}
                            name="bottomText"
                            type="text"
                            onChange={handleChange}
                            value={meme.bottomText}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.formButtonContainer}>
                <button
                    onClick={getMemeImage}
                    className={styles.memeFormButton}>
                    Get new meme image
                </button>
            </div>
            <div className={styles.imgContainer}>
                <img 
                    className={styles.memeImg}
                    src={meme.randomImage} 
                    alt="meme-image"
                />
                <p className={styles.memeTopText}>{meme.topText.toUpperCase()}</p>
                <p className={styles.memeBottomText}>{meme.bottomText.toUpperCase()}</p>
            </div>
        </div>
    )
}
export default Meme;