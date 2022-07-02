import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDogById, clearState } from "../../actions";
import './Detail.css';
// import load from '../../images/loading.gif'


export default function Detail() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const details = useSelector(state => state.details);

    // const { name, image, temperament, weight, height, life_span } = details;
    useEffect(() => {
        dispatch(getDogById(id));
        return () => {
            dispatch(clearState());
        }
    }, [dispatch, id]);

    // console.log(details[0]);

    return (
        <div className="body1">
            <div className="separate">
                <h3>
                    <a className="tohome" href="http://localhost:3000/home">To home</a>
                </h3>
            </div>
            {details[0]?.name ? (<div className="detail">
                <h1 className= "name">{details[0].name}</h1>
                <div className='image'>
                    <img src={details[0].image} alt="Img not found"  width="300px" height="300px" />
                </div>
                <p>This breed is: {details[0].temperament.join(', ')}</p>
                <p>Height: {details[0].height} cm</p>
                <p>Weight: {details[0].weight} kg</p>
                <p>Life span: {details[0].life_span}</p>
            </div>) :
                null
                }
        </div>
    )
}
