let defaultState = {
    colors: ["red", "orange", "yellow", "green", "blue", "purple", "violet"]
}

 const mainReducer = (state=defaultState, action) => {
     switch(action.type) {
         case "CHANGE_COLORS" :
             return {
                 ...state,
                 colors: action.colors
             }
         default : 
             return {...state}
     }
}

export default mainReducer;