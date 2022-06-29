import React from 'react';
import { useDispatch } from 'react-redux';
import { orderByWeight } from '../../../../actions';

export default function ByWeight() {

    const dispatch = useDispatch();

    function handleOnChange(e) {
        e.preventDefault()
        dispatch(orderByWeight(e.target.value))
    }

    return(
        <div>
            <div className="label">By Weight</div>
            <select className="select" onChange = {e => handleOnChange(e)}>
                <option value="All">All</option>
                <option value="Asc">Ascending order</option>
                <option value="Desc">Descending order</option>
            </select>
        </div>
    )
}
