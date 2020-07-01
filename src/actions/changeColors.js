import axios from 'axios';

export function changeColors(colors){
    return {
        type: "CHANGE_COLORS",
        colors: colors
    }
}

export function loadColors(){
    return(dispatch) => {
        let random_number = Math.floor(Math.random() * (10 - 7 + 1)) + 7;
        return axios.get(`http://www.colr.org/json/colors/random/${random_number}`).then(
            (response) => {
                console.log(response.data.matching_colors)
                let colors = response.data.matching_colors.filter(color => color !== "")
                colors = response.data.matching_colors.map(c => "#" + c);
                dispatch(changeColors(colors));
                console.log(colors)
            }
        )
    }
}
