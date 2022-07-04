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
    const history = useHistory();
    const [errors, setErrors] = useState({});
    const [selectedTemps, setSelectedTemps] = useState([]);
    let temps = [];

    useEffect(() => {
        dispatch(getTemperaments());
    }, [dispatch]);

    const [input, setInput] = useState({
        name: "",
        heightMax: "",
        heightMin: "",
        weightMax: "",
        weightMin: "",
        life_spanMax: "",
        life_spanMin: "",
        image: "",
        temperaments: []
    })

    //creo otro objeto para poder darle el formato al form que el back necesita para lanzar la action
    const jsonDog = {
        name: input.name,
        weight: `${input.weightMin} - ${input.weightMax}`,
        height: `${input.heightMin} - ${input.heightMax}`,
        image: input.image,
        life_span: `${input.life_spanMin} - ${input.life_spanMax} years`,
        allTemperaments: input.temperaments,
    }

    input.temperaments.forEach(temp => {
        allTemperaments.map(t => {
            if (temp === t.id && !temps.includes(t.name)) {
                temps.push(t.name);
            }
        })
    })

    function handleChange(e) {
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    function handleTemperamentSelect(e) {
        e.preventDefault();
        setInput({
            ...input,
            temperament: [...input.temperaments, !input.temperaments.includes(e.target.value) && e.target.value]
        })
        setSelectedTemps([...selectedTemps, e.target.value])
    }

    function handleCleanTemp(e) {
        e.preventDefault();
        if (selectedTemps.length) {
            setSelectedTemps([])
            input.temperaments = []
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (input.temperaments.length) {
            dispatch(postDog(jsonDog));
            alert("Dog created successfully");
            setInput({
                name: "",
                heightMax: "",
                heightMin: "",
                weightMax: "",
                weightMin: "",
                life_spanMax: "",
                life_spanMin: "",
                image: "",
                temperaments: []
            })
            history.push('/home', console.log('hola'))
        }
    }

    function handleRefresh(e) {
        e.preventDefault();
        setInput({
            name: "",
            heightMax: "",
            heightMin: "",
            weightMax: "",
            weightMin: "",
            life_spanMax: "",
            life_spanMin: "",
            image: "",
            temperaments: []
        })
        setSelectedTemps([])
    }

    return (
        <div className="form">
            <div>
                <Link to="/home">
                    <button className="tohome">To Home</button>
                </Link>
            </div>
            <h1 className="fact">Create your dog</h1>
            <br />
            <form onSubmit={e => handleSubmit(e)}>
                <div className="one">
                    <div>
                        <label className="title">Name: </label>
                        <input
                            className="inputext"
                            type="text"
                            name="name"
                            value={input.name}
                            onChange={e => handleChange(e)}

                        />
                        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
                    </div>
                    <br />
                    <div>
                        <label className="title">Temperament: </label>
                        <select
                            className="inputselect"
                            name="temperament"
                            value={input.temperament}
                            onChange={e => handleTemperamentSelect(e)}
                        >
                            <option value="">Select a temperament</option>
                            {allTemperaments.map(temperament => (
                                <option key={temperament.id} value={temperament.name}>{temperament.name}</option>
                            ))}
                        </select>
                        {errors.temperament && <p style={{ color: "red" }}>{errors.temperament}</p>}
                    </div>
                    <div>
                        <label className="title">Weight: </label>
                        <input
                            className="inputext"
                            type="text"
                            name="weight"
                            value={input.weight}
                            onChange={e => handleChange(e)}
                        />
                        {errors.weight && <p style={{ color: "red" }}>{errors.weight}</p>}
                    </div>
                </div>
            </form>
        </div>
    )
}
