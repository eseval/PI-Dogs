import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cards from "./Cards/Cards";
import './Home.css';
import AlphabeticalOrder from "./NavBar/Filters/AlphabeticalOrder";
import ByCreation from './NavBar/Filters/ByCreation';
import ByWeight from './NavBar/Filters/ByWeight';


import { getDogs } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import Paginated from "./Paginated/Paginated";

export default function Home() {
    const allDogs = useSelector(state => state.dogs);



    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [dogsPerPage] = useState(8)
    const indexOfLastDog = currentPage * dogsPerPage;
    const indexOfFirstDog = indexOfLastDog - dogsPerPage;
    const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog);

    if(currentPage > Math.ceil(allDogs.lenght / dogsPerPage) && currentPage !== 1) {
        setCurrentPage(1)
    }

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
        dispatch(getDogs());
    }, [dispatch]);

    function handleClick(e) {
        e.preventDefault();
        dispatch(getDogs());
    }

    return (
        <div>
            <Link to= '/dog'>Crete Dog</Link>
            <h1>Dog Shelter</h1>
            <button onClick={e => {handleClick(e)}}>
                Reset Dogs
            </button>
            <div>
                {/* <AlphabeticalOrder/>
                <ByCreation/>
                <AlphabeticalOrder/>
                <ByWeight/> */}
            </div>
            <div>
                <Cards allDogs={allDogs}/>
            </div>
        </div>
    )
}
