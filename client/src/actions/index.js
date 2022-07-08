import axios from 'axios';

// export function getDogs() {
//     return async function(dispatch) {
//         try {
//             let json = await axios.get('/dogs');
//             return dispatch({
//                 type: 'GET_DOGS',
//                 payload: json.data
//             })
//         } catch (error) {
//             console.log(error);
//         }
//     }
// }

// getDogs() using .then()
export function getDogs() {
    return function(dispatch) {
        try {
            axios.get('/dogs')
            .then(function(json) {
                return dispatch({
                    type: 'GET_DOGS',
                    payload: json.data
                })
            })
        } catch (error) {
            console.log(error);
        }
    }
}


export function getDogByName(name) {
    return async function(dispatch) {
        try {
            let json = await axios.get(`/dogs?name=${name}`);
            return dispatch({
                type: 'GET_DOG_BY_NAME',
                payload: json.data
            })
        } catch (error) {
            if(name[0] === ' '){
                alert('Please enter a valid name')
            }
            else{
                alert('Dog not found')
            }
            console.log(error);
        }
        //     alert ('Error getting dog by name');
        //     console.log(error);
        // }
    }
}

// export function getDogById(id) {
//     return function(dispatch) {
//         try {
//             axios.get(`/dogs/${id}`)
//             .then(function(json) {
//                 return dispatch({
//                     type: 'GET_DOG_BY_ID',
//                     payload: json.data
//                 })
//             })
//         } catch (error) {
//             console.log(error);
//         }
//     }
// }


export function getDogById(id) {
    return async function(dispatch) {
        try {
            let json = await axios.get(`/dogs/${id}`);
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
    return function (dispatch) {
        try {
            axios.get('/temperaments')
            .then(function(json) {
                return dispatch({
                    type: 'GET_TEMPERAMENTS',
                    payload: json.data
                })
            })
        } catch (error) {
            console.log(error);
        }
    }
}

// export function getTemperaments() {
//     return async function(dispatch) {
//         try {
//             let json = await axios.get('/temperaments');
//             return dispatch({
//                 type: 'GET_TEMPERAMENTS',
//                 payload: json.data
//             })
//         } catch (error) {
//             console.log(error);
//         }
//     }
// }

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
        const created = await axios.post('/dogs', dog);
        return created
    }
}

export function clearState(){
    return {
        type: "CLEAR_STATE",
        payload: {}
    }
}

export function deleteDog(id) {
    return async function(dispatch) {
        await axios.delete(`/dogs/${id}`);
        dispatch({
            type: 'DELETE_DOG',
            payload: id
        })
    }
}
