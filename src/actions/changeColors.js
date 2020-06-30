import axios from 'axios';

export function changeColors(colors){
    return {
        type: "CHANGE_COLORS",
        colors: colors
    }
}

export function loadColors(){
    return(dispatch) => {
        return axios.get("http://www.colr.org/json/colors/random/7").then(
            (response) => {
                let updated_colors = response.data.matching_colors.map(c => "#" + c);
                dispatch(changeColors(updated_colors));
            }
        )
    }
}
