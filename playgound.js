// case 'FILTER_BY_TEMPERAMENT':
//             const allDogs = state.allDogs
//             const array = []
//             const temperamentsFiltered = action.payload === "All" ? allDogs
//             : (() => {for(let i = 0; i < allDogs.length; i++) {
//                 if(isNaN(allDogs[i].id)) {
//                     if(allDogs[i].temperaments.map(e => e.name).includes(action.payload)) {
//                         array.push(allDogs[i])
//                     }
//                 }
//                 if(allDogs[i].temperaments.includes(action.payload)) {
//                     array.push(allDogs[i])
//                 }
//             }return array})()
//             return {
//                 ...state,
//                 dogs: temperamentsFiltered,
//                 filters: temperamentsFiltered
//             }