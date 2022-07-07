import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDogById, clearState } from "../../actions";
import './Detail.css';
// import load from '../../images/loading.gif'
import img from '../../images/dog.webp'



export default function Detail() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const details = useSelector(state => state.details);
    const noTemps = 'This breed does not have recorded temperaments'

    // const { name, image, temperament, weight, height, life_span } = details;
    useEffect(() => {
        dispatch(getDogById(id));
        return () => {
            dispatch(clearState());
        }
    }, [dispatch, id]);

    console.log(details[0]);

    return (
        <div className="body1">
            <div className="separate">
                <h3>
                    <a className="tohome" href="http://localhost:3000/home">To home</a>
                </h3>
            </div>
            {details[0]?.name ? (<div className="detail">
                <h1 className= "name_detail">{details[0].name}</h1>
                <div className='image'>
                    <img src={details[0].image ? details[0].image : img } alt="Img not found"  width="300px" height="300px" />
                </div>
                <p>This breed is: { details[0].temperaments?
                    typeof details[0].temperaments[0] === 'string' ?
                    details[0].temperaments.join(',')
                    :
                    details[0].temperaments.map((t)=>{
                        return  `${t.name}, `
                    })
                    :
                    noTemps }</p>
                <p>Height: {details[0].height} cm</p>
                <p>Weight: {details[0].weight} kg</p>
                <p>Life span: {details[0].life_span}</p>
            </div>) :
                null
                }
        </div>
    )
}
