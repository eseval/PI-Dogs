import axios from 'axios';

export function getDogs() {
    return async function (dispatch) {
        try {
            let json = await axios.get('localhost:3001/dogs');
            return dispatch({
                type: 'GET_DOGS',
                payload: json.data
            })
        }
        catch (error) {
            console.log(error)
        }
    }
}

export function getTemperaments() {
    return async function (dispatch) {
        try {
            let json = await axios.get('localhost:3001/temperaments');
            return dispatch({
                type: 'GET_TEMPERAMENTS',
                payload: json.data
            })
        }
        catch (error) {
            console.log(error)
        }
    }
}
