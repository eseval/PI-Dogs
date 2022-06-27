import React from "react";
import { useDispatch, useSelector } from "react-redux";

import './ByTemperament.css';

export default function ByTemperament() {
    const dispatch = useDispatch();

    function handleOnChange(e) {
        e.preventDefault()
        dispatch()
    }

    return(
        <div>
            <div>Temperament</div>
            <select onChange={e => handleOnChange(e)}>
                <option value="All">All</option>
                {/* {genres && genres.map((e, i) => <option value={e.name} key={i}>{e.name}</option>)} */}
            </select>
        </div>
    )
}
