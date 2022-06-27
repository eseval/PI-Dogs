import React from "react";
import { Link } from "react-router-dom";
import './Card.css';
import { useDispatch } from "react-redux";

export default function Card({ image, name, temperament }) {
    return (
        <div>
            <h3>{name}</h3>
            <h5>{temperament}</h5>
            <img src={image} alt="img not found" width="150px" height="150px"/>
        </div>
    )
}
