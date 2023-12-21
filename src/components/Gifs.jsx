import React from "react";
import './gifs.css'
import { useGlobalContext } from "./context";
// import {Image} from 'react-native'
const Gifs = () => {
    const { img } = useGlobalContext();
    console.log(img);
    return <>
      
        {img.map((curpost) => {
            return  (<div className="img_div">
                <img src={curpost.images.downsized.url} alt="image" className="img"/>
                <h3 id="title">{curpost.title}</h3>
               
            </div>)
           
        })}

    </>
}
export default Gifs