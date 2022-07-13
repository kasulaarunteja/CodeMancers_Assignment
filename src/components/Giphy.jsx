

import axios from 'axios';
import React from 'react';
import "./Giphy.css"
import { useState } from 'react';

const Giphy = ({Url}) => {

    const [text, setText] = useState([])

    const handleInput = (e) => {
        if (text.length = 0) {
            return
        }
        console.log(e.target.value)
        axios.get(`https://api.giphy.com/v1/gifs/search?api_key=0mBsR1TSdSHiMo1x2g9jGJQcKLpLfTEu&q=${e.target.value}&limit=25&offset=0&rating=g&lang=en`).then(({ data }) => {
            console.log(data.data)
            setText(data.data)
        }, [])
    }

    return (
        <>
            <input id="gif-in" type="text" onChange={(e) => { handleInput(e) }} />
            <div style={{ display: 'grid', gridTemplateColumns: "repeat(3, 100px)", height: "300px" , overflow: "scroll"}}>
                {text.map((e) => {

                    return (
                        <img src={e.images.original.url} key={e.id} style={{ width: "100px" }}  onClick={() => {Url(e.images.original.url)}} />
                    )
                })}

            </div>

        </>
    )
}

export default Giphy;
