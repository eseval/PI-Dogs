import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { getTemperaments, getDogs, postDog } from "../../actions";
import { Link, useHistory } from "react-router-dom";
import './Form.css';

function validate(input) {
    const noEmpty = /\S+/;
    const validateName = /^.{3,30}$/;
    const errors = {};
    if (!input.name) {
        errors.name = "Name is required";
    }
    if (!noEmpty.test(input.name)) {
        errors.name = 'Name cannot start with whitespace';
    }
    if (!validateName.test(input.name)) {
        errors.name = 'Name must be between 3 and 30 characters';
    }
    if (!input.temperament) {
        errors.temperament = "Temperament is required";
    }
    if (!input.weight) {
        errors.weight = "Weight is required";
    }
    if (!input.height) {
        errors.height = "Height is required";
    }
    return errors;
}

export default function Form() {
    const dispatch = useDispatch();
    const allTemperaments = useSelector(state => state.temperaments);
    let allDogs = useSelector(state => state.allDogs);


    const [errors, setErrors] = useState({});
}
