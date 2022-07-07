import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cards from "./Cards/Cards";
import './Home.css';
import ByCreation from './NavBar/Filters/ByCreation';
import ByTemperament from './NavBar/Filters/ByTemperament';
import ByWeight from './NavBar/Filters/ByWeight';
import SearchBar from './NavBar/SearchBar';
import AlphabeticalOrder from "./NavBar/Filters/AlphabeticalOrder";
import { getTemperaments, getDogs } from "../../actions";
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

    if(currentPage > Math.ceil(allDogs.length / dogsPerPage) && currentPage !== 1) {
        setCurrentPage(1)
        console.log('Estoy entrando al IF');
    }

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
        dispatch(getDogs())
        dispatch(getTemperaments());
    }, [dispatch]);

    function handleClick(e) {
        e.preventDefault();
        dispatch(getDogs());
    }

    return (
        <div className="body">
            <div className="searchBar">
                <SearchBar />
            </div>
            <Link to= '/dog' className="link">Crete Dog</Link>
            <h1>Dogs' Shelter</h1>
            <button onClick={e => {handleClick(e)}}>
                Reset Dogs
            </button>
            <div className="filters">
                <ByTemperament/>
                <AlphabeticalOrder/>
                <ByCreation/>
                <ByWeight/>
            </div>
            <div className="paginated">
                <Paginated
                    dogsPerPage={dogsPerPage}
                    allDogs={allDogs}
                    paginado={paginado}
                    currentPage={currentPage}
                />
            </div>
            <div>
                <Cards allDogs={currentDogs}/>
            </div>
        </div>
    )
}
