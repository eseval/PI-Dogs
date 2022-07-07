import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getDogByName } from "../../../actions";
import './SearchBar.css';

export default function SearchBar() {
    const [name, setName] = useState('')
    const dispatch = useDispatch();

    const [cont, setCont] = useState(0)

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
        else if(name[0] === ' '){
            setName(name.substring(1))
        }
        }

    // function handleClick(e){
    //     e.preventDefault()
    //     setCont (cont + 1)
    // }

    // function handleMyClick(e){
    //     e.preventDefault()
    //     setCont (cont - 1)
    // }

    return (
        <div>
            <div>
                {/* <h1>La perrera</h1> */}
                <input className="input_searchBar"
                    type="text"
                    placeholder="Search your dog"
                    value={name}
                    onChange={e => handleOnChange(e)}
                    onKeyPress={e => handleKeyPress(e)}
                />
                <button className="button_input"
                type="submit"
                onClick={e => handleSubmit(e)}
                >Search</button>
            </div>
            {/* <div>
                <button
                onClick={handleClick}>
                    Click +
                </button>
                <button
                onClick={handleMyClick}>
                    Click -
                </button>
                <h1>{cont}</h1>
            </div> */}
        </div>
    )
}
