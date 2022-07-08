import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDogById, clearState } from "../../actions";
import './Detail.css';
// import load from '../../images/loading.gif'
import img from '../../images/dog.webp'
import weight from '../../images/weight.png'
import height from '../../images/height.png'
import heart from '../../images/heart.png'
import temps from '../../images/temps.png'


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
                    <a className="tohome" href="/home">To home</a>
                </h3>
            </div>
            {details[0]?.name ? (<div className="detail">
                <h1 className= "name_detail">{details[0].name}</h1>
                <div>
                    <img className="image_detail" src={details[0].image ? details[0].image : img } alt="Img not found"  width="300px" height="300px" />
                </div>
                <p className="temperaments_detail">
                    <img className="image_detail_input" src={temps} alt="" width='30px' height='30px'/>
                    { details[0].temperaments?
                    typeof details[0].temperaments[0] === 'string' ?
                    details[0].temperaments.join(', ')
                    :
                    details[0].temperaments.map((t)=>{
                        return  `${t.name}, `
                    })
                    :
                    noTemps }
                    </p>
                <p>
                    <img className="image_detail_input" src={height} alt="" width='30px' height='30px'/>
                    Height: {details[0].height} cm
                </p>
                <p>
                    <img className="image_detail_input" src={weight} alt="" width='30px' height='30px'/>
                    Weight: {details[0].weight} kg
                </p>
                <p>
                    <img className="image_detail_input" src={heart} alt="" width='30px' height='30px'/>
                    Life span: {details[0].life_span}
                </p>
            </div>) :
                null
                }
        </div>
    )
}
