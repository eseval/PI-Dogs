const initialState = {
    dogs: [],
    temperaments: [],
    details: {},
    allDogs: [],
    creteDog: [],
    filters: []
}


export default function rootReducer(state = initialState, action){
    switch(action.type){
        case 'GET_DOGS':
            return {
                ...state,
                dogs: action.payload,
                allDogs: action.payload
            }
        case 'GET_DOG_BY_NAME':
            return {
                ...state,
                dogs: action.payload,
                allDogs: action.payload
            }
        case 'GET_DOG_BY_ID':
            return {
                ...state,
                details: action.payload
            }
        case 'GET_TEMPERAMENTS':
            return {
                ...state,
                temperaments: action.payload
            }
        case 'FILTER_BY_TEMPERAMENT':
            const allDogsTemps = state.allDogs
            console.log(allDogsTemps)
            const filterTemps = action.payload
            let arr = []
            if(filterTemps){
                allDogsTemps.forEach(dog => {
                    if(dog.temperaments && typeof dog.temperaments === 'string'){
                        if(dog.temperaments.includes(action.payload)) arr.push(dog)
                        console.log(dog.temperaments)
                    } else if(dog.temperaments && typeof dog.temperaments !== 'string'){
                        dog.temperaments.map(e => {
                            if(e.name.includes(action.payload)) arr.push(dog)
                        })
                    }
                })
            }
            return {
                ...state,
                dogs: arr
            }
        case 'ORDER_BY_NAME':
            let allDg = [...state.dogs]
            allDg = allDg.sort((a,b) => {
                if(a.name.toLowerCase() < b.name.toLowerCase()){
                    return action.payload === 'Asc' ? -1 : 1
            }
            if(a.name.toLowerCase() > b.name.toLowerCase()){
                return action.payload === 'Desc' ? -1 : 1
            }
            else{
                return 0
            }
            })
            return {
                ...state,
                dogs: action.payload === 'All' ? state.allDogs : allDg,
            }
        case 'ORDER_BY_CREATION':
            let filter
            if(state.filters.length === 0){
                let allDogsCreated = [...state.allDogs]
                filter = action.payload === 'api' ? allDogsCreated.filter(e=> !isNaN(e.id) === true) : allDogsCreated.filter(e => e.created === true)
                return {
                    ...state,
                    dogs: action.payload === 'all' ? allDogsCreated : filter
                }
            } else if(state.filters.length > 0){
                let allDogsCreated = [...state.filters]
                filter = action.payload === 'api' ? allDogsCreated.filter(e => e.created === false) : allDogsCreated.filter(e => e.created === true)
                return {
                    ...state,
                    dogs: action.payload === 'all' ? allDogsCreated : filter
                }
            } return
        case 'ORDER_BY_WEIGHT':
            let allDogsWeight = [...state.dogs]
            allDogsWeight = allDogsWeight.sort((a,b) => {
                if(a.weight < b.weight){
                    return action.payload === 'Asc' ? -1 : 1
            }
            if(a.weight > b.weight){
                return action.payload === 'Desc' ? -1 : 1
            }
            else{
                return 0
            }
            })
            return {
                ...state,
                dogs: action.payload === 'All' ? state.allDogs : allDogsWeight,
            }
        case 'POST_DOG':
            return {
                ...state,
            }
        case 'DELETE_DOG':
            return {
                ...state,
                dogs: state.dogs.filter(e => e.id !== action.payload),
                allDogs: state.allDogs.filter(e => e.id !== action.payload)
            }
        case 'CLEAR_STATE':
            return {
                ...state,
                details: action.payload,
            }
        default:
            return state;
    }
}
