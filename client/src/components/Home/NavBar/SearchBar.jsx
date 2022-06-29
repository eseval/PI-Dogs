import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getDogByName } from "../../../actions";
import './SearchBar.css';

export default function SearchBar() {
    const [name, setName] = useState('')
    const dispatch = useDispatch();

    function handleOnChange(e) {
        e.preventDefault()
        setName(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(getDogByName(name))
        setName('')
    }

    function handleKeyPress(e){
        if(e.key === 'Enter'){
            handleSubmit(e);
        }
    }

    return (
        <div>
            <div>
                <h1>La perrera</h1>
                <input
                    type="text"
                    placeholder="Search your dog"
                    value={name}
                    onChange={e => handleOnChange(e)}
                    onKeyPress={e => handleKeyPress(e)}
                />
                <button
                type="submit"
                onClick={e => handleSubmit(e)}
                >Search</button>
            </div>
        </div>
    )
}
