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
            const allDogs = state.allDogs;
            const array = []
            const temperamentsFiltered = action.payload === 'All' ? allDogs
            : (() => {for(let i = 0; i < allDogs.length; i++){
                if (isNaN(allDogs[i].id)){
                    if(allDogs[i].temperaments.map(e => e.name).includes(action.payload)){
                        array.push(allDogs[i])}
                    }
                    if(allDogs[i].temperaments.includes(action.payload)){
                        array.push(allDogs[i])
                    }
                }return array})()
            return {
                ...state,
                dogs: temperamentsFiltered,
                filters: temperamentsFiltered
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
        case 'ORDER_BY_WEIGHT':
            const all = [...state.dogs]
            const filterByWeight = all.sort((a,b) => {
                if(a.rating < b.rating){
                    return action.payload === 'Asc' ? 1 : -1
                }
                if(a.rating > b.rating){
                    return action.payload === 'Desc' ? 1 : -1
                }return 0
            })
            return {
                ...state,
                dogs: action.payload === 'All' ? state.allDogs : filterByWeight,
            }
        case 'DELETE_DOG':
            return {
                ...state,
                dogs: state.dogs.filter(e => e.id !== action.payload),
                allDogs: state.allDogs.filter(e => e.id !== action.payload)
            }
        default:
            return state;
    }
}
