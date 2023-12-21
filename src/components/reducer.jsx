const reducer=(state,action)=>{
    switch(action.type){
        case "GET_GIFS":
            return{
                 ...state,
                 img:action.payload.img,
            };
         case "search_query":
                return{
                    ...state,
                    text1:action.payload.text1,
                }
    }
    return state;
}
export default reducer;