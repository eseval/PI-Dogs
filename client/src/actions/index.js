import axios from 'axios';

export function getDogs() {
    return async function(dispatch) {
        try {
            let json = await axios.get('http://localhost:3001/dogs');
            return dispatch({
                type: 'GET_DOGS',
                payload: json.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function getDogByName(name) {
    return async function(dispatch) {
        try {
            let json = await axios.get(`http://localhost:3001/dogs?name=${name}`);
            return dispatch({
                type: 'GET_DOG_BY_NAME',
                payload: json.data
            })
        } catch (error) {
            alert ('Error getting dog by name');
            console.log(error);
        }
    }
}

export function getDogById(id) {
    return async function(dispatch) {
        try {
            let json = await axios.get(`http://localhost:3001/dogs/${id}`);
            return dispatch({
                type: 'GET_DOG_BY_ID',
                payload: json.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function getTemperaments() {
    return async function(dispatch) {
        try {
            let json = await axios.get('http://localhost:3001/temperaments');
            return dispatch({
                type: 'GET_TEMPERAMENTS',
                payload: json.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function filterDogsByTemperament(payload) {
    return {
        type: 'FILTER_BY_TEMPERAMENT',
        payload
    }
}

export function orderByName(payload) {
    //console.log(payload)
    return {
    type: "ORDER_BY_NAME",
    payload
    }
}

export function orderByWeight(payload) {
    return {
        type: "ORDER_BY_WEIGHT",
        payload
    }
}

export function orderByCreation(payload) {
    return {
        type: "ORDER_BY_CREATION",
        payload
    }
}

export function postDog(dog) {
    return async function(dispatch) {
        const created = await axios.post('http://localhost:3001/dogs', dog);
        return created
    }
}

export function deleteDog(id) {
    return async function(dispatch) {
        await axios.delete(`http://localhost:3001/dogs/${id}`);
        dispatch({
            type: 'DELETE_DOG',
            payload: id
        })
    }
}

export function clearState(){
    return {
        type: "CLEAR_STATE",
        payload: {}
    }
}
