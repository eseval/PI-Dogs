import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterDogsByTemperament } from "../../../../actions";
import './ByTemperament.css';

export default function ByTemperament() {

    const temperaments = useSelector(state => state.temperaments);

    const dispatch = useDispatch();

    function handleOnChange(e) {
        e.preventDefault()
        dispatch(filterDogsByTemperament(e.target.value))
    }

    return(
        <div>
            <div>Temperament</div>
            <select onChange={e => handleOnChange(e)}>
                <option value="All">All</option>
                {temperaments && temperaments.map((e, i) => <option value={e.name} key={i}>{e.name}</option>)}
            </select>
        </div>
    )
}
