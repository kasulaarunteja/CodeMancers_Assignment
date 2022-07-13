

import React from 'react';
import { useState } from 'react';
import "./Post.css"
import Giphy from './Giphy';


export default function Post() {

  const [state, setState] = useState(0);
  const [Url, setUrl] = useState("");


  return (
    <div>
      <div className="navbar">
        <button> Compose Post</button>
        <button >  Photo/Video Album</button>
        <button>  Live Video</button>
      </div>
      <div className="main">
        <div id="box1">
          <input type="text" placeholder="Write Something Here..." id="text-box" />
          <div>
            {Url ? <img src={Url} style={{ width: "150px" }} /> : ""}
          </div>
        </div>
        <div id="box2">
          <button>Tag Frd</button>
          <button> check</button>
          <button className="gip-b" onClick={() => { setState(1) }}>Gif</button>
          <button> Tag Even</button>
        </div>
        <div>
          <button>Only me</button>
          <button>POST</button>
        </div>

        {
          state ? <Giphy Url={setUrl} /> : ""
        }

      </div>
    </div>


  );
}
