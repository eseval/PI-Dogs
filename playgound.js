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

// import React from "react";
// // import './Paginated.css';

// export default function Paginated({ dogsPerPage, allDogs, paginado, currentPage }) {
//     const pageNumbers = [];
//     for (let i = 1; i <= Math.ceil(allDogs.length / dogsPerPage); i++) {
//         pageNumbers.push(i);
//     }
//     // disable next button if it's the last page
//     const nextDisabled = currentPage === pageNumbers.length;
//     // disable prev button if it's the first page
//     const prevDisabled = currentPage === 1;
    return (
        <div>
            <div>
                <button
                    disabled={prevDisabled}
                    onClick={() => paginado(currentPage - 1)}
                >
                    Prev
                </button>
                {pageNumbers.map(number => (
                    <button
                        key={number}
                        onClick={() => paginado(number)}
                        className={currentPage === number ? "active" : ""}
                    >
                        {number}
                    </button>
                ))}
                <button
                    disabled={nextDisabled}
                    onClick={() => paginado(currentPage + 1)}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

