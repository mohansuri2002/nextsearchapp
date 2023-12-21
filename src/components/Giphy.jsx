import React from "react"
import './giphy.css';
import { useGlobalContext } from "./context";

const Giphy = () => {
  const { text1, searchPost } = useGlobalContext();


  const handleInput = (e) => {

    searchPost(e.target.value)
  }
  return (
    <>
      <div className="textbox">
        <h1>Animated Text Generator</h1>
        <input className='input-field' value={text1} onChange={handleInput} placeholder="Search Gifs" />

      </div>
    </>
  );
}
export default Giphy 
