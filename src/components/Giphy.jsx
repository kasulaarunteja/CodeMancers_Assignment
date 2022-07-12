

import axios from 'axios';
import React from 'react';
import { useState } from 'react';

const Giphy = () => {

    const [text, setText] = useState("")
    const [result, setResult] = useState([]);

    const handleInput = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        // if(text.length = 0){
        //     return
        // }
        // console.log(text)
        const fetchData = async () => {
            const res = await axios.get("https://api.giphy.com/v1/gifs/search", {
                params: {
                    api_key: "y1PGNI7Nk0crrmOxiz5tzRl6zTwFVnJe"
                }
            })
            console.log(res)
            setResult(res)
        }
        fetchData()
        setText("")
    }



    return (
        <div>
            <h2>giphy</h2>
            <input type="text" value={text} onChange={handleInput} />
            <button onClick={handleSubmit}>submit</button>
            <div>
                {result.map((e) => {

                })}
            </div>
        </div>
    );
}

export default Giphy;
