import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
import { GiphyFetch } from '@giphy/js-fetch-api'
const AppContext=React.createContext();
const initialState={
    text1:"cat",
    img:[],
}
const gf = new GiphyFetch('oOxdQmQCKw63zyEEbNoOSROMP77xmJaB')
const AppProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState);
    const apiCall = async () => {
        // console.log(state.text1);
        try{
            const { data: gifs } = await gf.search(`${state.text1}`, { sort: 'relevant', lang: 'es',  type: 'stickers' })
            // console.log(gifs);
            dispatch({
            type:"GET_GIFS",
            payload: {
               img:gifs
            },
        })
        }
        catch(error){
            console.log(error);
        }
      
    }
    const searchPost=(tex)=>{
        console.log(tex);
        dispatch({type:"search_query",
        payload: {
            text1:tex,
         },
        });
    }
    useEffect(()=>{
        apiCall();
    },[state.text1]);
    
    return <AppContext.Provider value={{...state,searchPost}}>{children}</AppContext.Provider>
}
const useGlobalContext=()=>{
    return useContext(AppContext);
}
export {AppContext,AppProvider,useGlobalContext};