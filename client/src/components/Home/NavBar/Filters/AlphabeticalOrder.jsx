import React from "react";
import { useDispatch } from "react-redux";

import './AlphabeticalOrder.css';

export default function AlphabeticalOrder() {
    const dispatch = useDispatch();

    function handleOnChange(e) {
        e.preventDefault()
        dispatch()
    }

    return(
        <div>
            <div>Alphabetical Order</div>
            <select className="select" onChange={e => handleOnChange(e)}>
                <option value="All">All</option>
                <option value="Asc">Asc</option>
                <option value="Desc">Desc</option>
            </select>
        </div>
    )
}
