import React from "react";
import { Link } from "react-router-dom";
import './Card.css';
import { deleteDog } from '../../../../actions'
import { useDispatch } from "react-redux";


export default function Card({ image, name, temperament, weight, height, id }) {

    const dispatch = useDispatch();
    function handleClick(e, id) {
        e.preventDefault()
        dispatch(deleteDog(id))
    }

    return (
        <div className="card">
            <nav className='card-body'>
                <Link className="link-title" to={`dogs/${id}`}>
                    <h1 className="card-title">{name.replace(name[0], name[0].toUpperCase())}</h1>
                </Link>
            </nav>
            <h5>Temperament: {temperament}</h5>
            <img src={image} alt="img not found" width="150px" height="150px"/>
            <h3>Weight: {weight}</h3>
            {/* <h3>Height: {height}</h3> */}
            <div>
                {id.length > 10 ? <button onClick = {e => handleClick(e, id)}>Delete game</button> : null}
            </div>
        </div>
    )
}
