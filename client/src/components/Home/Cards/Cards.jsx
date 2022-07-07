import React from "react";
import Card from "./Card/Card";
import './Cards.css';

export default function Cards({ allDogs }) {
    return (
        <div className='cards'>
            { allDogs.length !== 0 ? allDogs.map((dog, i) => (
                <Card
                    key={i}
                    weight={dog.weight + " kg"}
                    id={dog.id}
                    image={dog.image}
                    name={dog.name}
                    temperament={dog.temperaments}
                />
            )):
            <div>
                <h1>Loading dogs</h1>
            </div>
            }
        </div>
    )
}
