import React from "react";
import './Paginated.css';

export default function Paginated({ dogsPerPage, allDogs, paginado }) {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(allDogs.length / dogsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav>
            {pageNumbers && pageNumbers.map((number) => (
                <div key={number}>
                    <button onClick={() => paginado(number)}>{number}</button>
                </div>
            ))}
        </nav>
    )
}

