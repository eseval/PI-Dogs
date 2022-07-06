import React from "react";
import './Paginated.css';

export default function Paginated({ dogsPerPage, allDogs, paginado, currentPage }) {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(allDogs.length / dogsPerPage); i++) {
        pageNumbers.push(i);
    }
    // disable next button if it's the last page
    const nextDisabled = currentPage === pageNumbers.length;
    // disable prev button if it's the first page
    const prevDisabled = currentPage === 1;
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
                        className='focus_paginate'
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

