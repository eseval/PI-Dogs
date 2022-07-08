import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { getTemperaments, postDog } from "../../actions";
import { Link, useHistory } from "react-router-dom";
import './Form.css';
import eliminate from './../../images/eliminar.png'
import dog_gif from './../../images/dog.jpg'

function validate(input) {
    const validateName = /^.{3,30}$/;
    const validateName2 = /^[a-zA-Z]{3,30}$/;
    const errors = {};
    if (!input.name) {
        errors.name = "Name is required";
    }
    if(input.name[0] === ' '){
        errors.name = 'Please, the name cannot start with a blank space';
    }
    if(!validateName.test(input.name)){
        errors.name = 'Please, the name must be between 3 and 30 characters long';
    }
    if(!validateName2.test(input.name)){
        errors.name = 'Please, the name must contain only letters';
    }
    if (input.heightMin && input.heightMin >= input.heightMax) {
        errors.heightMin = "Height min can't be higher or equal than height max";
    }
    if (input.heightMax && input.heightMax <= input.heightMin) {
        errors.heightMax = "Height max can't be lower or equal than height min";
    }
    if (input.weightMin && input.weightMin >= input.weightMax) {
        errors.heightMin = "Weight min can't be higher or equal than weight max";
    }
    if (input.weightMax && input.weightMax <= input.weightMin) {
        errors.weightMax = "Weight max can't be lower or equal than weight min";
    }
    if (input.life_spanMin && input.life_spanMin >= input.life_spanMax) {
        errors.life_spanMin = "Life span min can't be higher or equal than life span max";
    }
    if (input.life_spanMax && input.life_spanMax <= input.life_spanMin) {
        errors.life_spanMax = "Life span max can't be lower or equal than life span min";
    }
    if(!(/\.(gif|jpg|jpeg|png)$/).test(input.image)){
        input.image && (errors.image = 'Please, this field must be a valid image')
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
        heightMin: "",
        heightMax: "",
        weightMin: "",
        weightMax: "",
        life_spanMin: "",
        life_spanMax: "",
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
        temperaments: input.temperaments,
    }

    // console.log(allTemperaments);

    input.temperaments.forEach(temp => {
        // eslint-disable-next-line
        allTemperaments.map(t => {
            if (temp === t.id && !temps.includes(t.name)) {
                temps.push(t.name);
            }
        })
    })
    // console.log(allTemperaments);

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

    function handleTemperaments(e) {
        e.preventDefault();
        setInput({
            ...input,
            temperaments: [...input.temperaments, !input.temperaments.includes(e.target.value) && e.target.value]
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
                heightMin: "",
                heightMax: "",
                weightMin: "",
                weightMax: "",
                life_spanMin: "",
                life_spanMax: "",
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
            heightMin: "",
            heightMax: "",
            weightMin: "",
            weightMax: "",
            life_spanMin: "",
            life_spanMax: "",
            image: "",
            temperaments: []
        })
        setSelectedTemps([])
    }

    return (
        <div className="form_main">
            <div>
                <Link to="/home">
                    <button className="tohome">To Home</button>
                </Link>
            </div>
            <div>
                <button onClick={(e) => handleRefresh(e)}>Refresh</button>
            </div>
            <br />
            <form onSubmit={e => handleSubmit(e)}>
            <h1 className="create_dog">Create your dog!</h1>
                <div className="full_cont">
                    <div className="form">
                        <div className="form2">
                            <div className="name_form">
                                <label>Name: </label>
                                <input
                                    className="input_form_name"
                                    type="text"
                                    value={input.name}
                                    name="name"
                                    onChange={e => handleChange(e)}
                                />
                            </div>
                            <div className="height_form">
                                <label>Height Min: </label>
                                <input
                                    className="input_form"
                                    type='number'
                                    value={input.heightMin}
                                    name="heightMin"
                                    onChange={e => handleChange(e)}
                                    min="1"
                                    max="100"
                                />
                            </div>
                            <div className="height_form">
                                <label>Height Max: </label>
                                <input
                                    className="input_form"
                                    type='number'
                                    value={input.heightMax}
                                    name="heightMax"
                                    onChange={e => handleChange(e)}
                                    min="1"
                                    max="100"
                                />
                            </div>
                            <div className="weight_form">
                                <label>Weight Min: </label>
                                <input
                                    className="input_form"
                                    type='number'
                                    value={input.weightMin}
                                    name="weightMin"
                                    onChange={e => handleChange(e)}
                                    min="1"
                                    max="100"
                                />
                            </div>
                            <div className="weight_form">
                                <label>Weight Max: </label>
                                <input
                                    className="input_form"
                                    type='number'
                                    value={input.weightMax}
                                    name="weightMax"
                                    onChange={e => handleChange(e)}
                                    min="1"
                                    max="100"
                                />
                            </div>
                            <div className="lifes_form">
                                <label>Life span Min: </label>
                                <input
                                    className="input_form"
                                    type='number'
                                    value={input.life_spanMin}
                                    name="life_spanMin"
                                    onChange={e => handleChange(e)}
                                    min="1"
                                    max="50"
                                />
                            </div>
                            <div className="lifes_form">
                                <label>Life span Max: </label>
                                <input
                                    className="input_form"
                                    type='number'
                                    value={input.life_spanMax}
                                    name="life_spanMax"
                                    onChange={e => handleChange(e)}
                                    min="1"
                                    max="50"
                                />
                            </div>
                            <div className="input_form_image">
                                <label className="input_form_label_image">Image URL: </label>
                                <input
                                    className="input_form"
                                    type="url"
                                    value={input.image}
                                    name="image"
                                    onChange={e => handleChange(e)}
                                />
                            </div>
                            <div className="temperaments">
                                <label>Temperament: </label>
                                <select onChange={(e) => handleTemperaments(e)} id='temps'>
                                <option hidden>Select at least one temperament</option>
                                {allTemperaments?.map((t) => (
                                    <option key={t.id} value={t.id}>
                                        {t.name}
                                    </option>
                                ))}
                                </select>
                                {selectedTemps.length ? <button onClick={e => handleCleanTemp(e)} className='filter_temp'>x</button> : <button hidden></button>}
                            </div>
                        </div>
                    </div>
                    {!Object.keys(errors).length ? (
                        ""
                    ) : (
                        <div className="errors_container">
                            <div>
                                <img src={eliminate} alt="eliminate"/>
                            </div>
                            <div>
                                {errors.name && <p>{errors.name}</p>}
                                {errors.heightMin && <p>{errors.heightMin}</p>}
                                {errors.heightMax && <p>{errors.heightMax}</p>}
                                {errors.weightMin && <p>{errors.weightMin}</p>}
                                {errors.weightMax && <p>{errors.weightMax}</p>}
                                {errors.life_spanMin && <p>{errors.life_spanMin}</p>}
                                {errors.life_spanMax && <p>{errors.life_spanMax}</p>}
                                {errors.image && <p>{errors.image}</p>}
                                {errors.temperaments && <p>{errors.temperaments}</p>}
                            </div>
                        </div>
                    )}
                    <div className="ul_container">
                        <div className="ul">
                            <ul>
                                <div className="li_container">
                                    <div className="img_cont">
                                        <li className="li_img">
                                            {input.image ? (
                                                <img src={input.image} width="150px" alt="img" className="img2"/>
                                            ) : (
                                                <img
                                                    src={dog_gif}
                                                    width="150px"
                                                    alt='Select a dog'
                                                    className="img2"
                                                />
                                            )}
                                        </li>
                                    </div>
                                    <div className="info_li_container">
                                        <li className="li">
                                            <h3>{input.name}</h3>
                                        </li>
                                        <li className="li">
                                            <p>
                                                {input.heightMin + " - " + input.heightMax + " cm"}
                                            </p>
                                        </li>
                                        <li className="li">
                                            <p>
                                                {input.weightMin + " - " + input.weightMax + " kg"}
                                            </p>
                                        </li>
                                        <li className="li">
                                            <p>
                                                {input.life_spanMin + " - " + input.life_spanMax + " years"}
                                            </p>
                                        </li>
                                        {
                                            <li className="li">
                                                <p className="p_temp">{temps.join(', ')}</p>
                                            </li>
                                        }
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="button">
                    {!Object.keys(errors).length && input.name.length ? (
                        <button type="submit" className="ok_button">
                            Create!
                        </button>
                    ) : (
                        <input
                            className="submit"
                            type="submit"
                            value={input.created}
                            disabled={ Object.keys(errors).length > 0 }
                            />
                    )}
                </div>
            </form>
        </div>
    )
}
