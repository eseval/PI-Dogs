import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import Cards from './Cards/Cards'
import './Home.css';
import ByCreation from './NavBar/Filters/ByCreation';
import ByTemperament from './NavBar/Filters/ByTemperament';
import ByWeight from './NavBar/Filters/ByWeight';
import SearchBar from './NavBar/SearchBar';
import AlphabeticalOrder from './NavBar/Filters/AlphabeticalOrder';
import { getDogs, getTemperaments } from '../../actions'
import { useDispatch, useSelector } from 'react-redux'
import Paginated from './Paginated/Paginated'

export default function Home() {
    const allDogs = useSelector(state => state.dogs)

    // console.log(allDogs)

    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1)
    const [dogsPerPage] = useState(8)
    const indexOfLastDog = currentPage * dogsPerPage
    const indexOfFirstDog = indexOfLastDog - dogsPerPage
    const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog)

    if (currentPage > Math.ceil(allDogs.length / dogsPerPage) && currentPage !== 1) {
        setCurrentPage(1)
    }

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
        dispatch(getDogs())
        dispatch(getTemperaments())
    }, [dispatch])

    function handleClick(e) {
        e.preventDefault()
        dispatch(getDogs())
    }

    return (
        <div>
            <div>
                <SearchBar />
            </div>
            <button>
                <Link to="/dog">Create your dreamed dog</Link>
            </button>
            <div>
                <button onClick={e => handleClick(e)}>Reload dogs</button>
            </div>
            <div>
                <ByTemperament paginado={paginado}/>
                <ByCreation/>
                <AlphabeticalOrder/>
                <ByWeight/>
            </div>
            <div>
                <Paginated
                    dogsPerPage={dogsPerPage}
                    alldogs={allDogs}
                    paginado={paginado}
                />
            </div>
            <div>
                <Cards allDogs={currentDogs}/>
            </div>
        </div>
    )
}
