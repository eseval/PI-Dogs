import React from "react";
import Card from "./Card/Card";
import './Cards.css';

export default function Cards({ allDogs }) {
    return (
        <div>
            { allDogs.length !== 0 ? allDogs.map((dog, i) => (
                <Card
                    key={i}
                    weight={dog.weight}
                    id={dog.id}
                    image={dog.image}
                    name={dog.name}
                    temperament={dog.temperament}
                />
            )):
            <div>
                <h1>Loading dogs</h1>
            </div>
            }
        </div>
    )
}
