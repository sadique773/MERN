import React from 'react'
import { useState } from 'react'

export default function Likebutton() {

    let [like,setlike] = useState(false);

    let likestyle = {color:"red"};
    function likbtn(){
        like = !like
        setlike(like)
    }

  return (
    <div>
       <span onClick={likbtn}>
        {like ?(<i className="fa-solid fa-heart" style={likestyle}></i>):(<i className="fa-regular fa-heart" ></i>)}
        
        </span>

    </div>
  )
}
