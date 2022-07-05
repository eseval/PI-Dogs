// // // // // [
// // // // //     {
// // // // //             "id": 3498,
// // // // //             "name": "Grand Theft Auto V",
// // // // //             "image": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
// // // // //             "rating": 4.47,
// // // // //             "platforms": [
// // // // //                 "PC",
// // // // //                 "Xbox Series S/X",
// // // // //                 "PlayStation 4",
// // // // //                 "PlayStation 3",
// // // // //                 "Xbox 360",
// // // // //                 "Xbox One",
// // // // //                 "PlayStation 5"
// // // // //             ],
// // // // //             "genres": [
// // // // //                 "Action",
// // // // //                 "Adventure"
// // // // //             ],
// // // // //             "created": false
// // // // //         },
// // // // // ]

// // // // // [
// // // // //     {
// // // // //         "id": 1,
// // // // //         "name": "Action"
// // // // //     },
// // // // //     {
// // // // //         "id": 2,
// // // // //         "name": "Indie"
// // // // //     },
// // // // //     {
// // // // //         "id": 3,
// // // // //         "name": "RPG"
// // // // //     },
// // // // //     {
// // // // //         "id": 4,
// // // // //         "name": "Adventure"
// // // // //     },
// // // // //     {
// // // // //         "id": 5,
// // // // //         "name": "Strategy"
// // // // //     },
// // // // //     {
// // // // //         "id": 6,
// // // // //         "name": "Shooter"
// // // // //     },
// // // // //     {
// // // // //         "id": 7,
// // // // //         "name": "Casual"
// // // // //     },
// // // // //     {
// // // // //         "id": 8,
// // // // //         "name": "Simulation"
// // // // //     },
// // // // //     {
// // // // //         "id": 9,
// // // // //         "name": "Puzzle"
// // // // //     },
// // // // //     {
// // // // //         "id": 10,
// // // // //         "name": "Racing"
// // // // //     },
// // // // //     {
// // // // //         "id": 11,
// // // // //         "name": "Arcade"
// // // // //     },
// // // // //     {
// // // // //         "id": 12,
// // // // //         "name": "Platformer"
// // // // //     },
// // // // //     {
// // // // //         "id": 13,
// // // // //         "name": "Sports"
// // // // //     },
// // // // //     {
// // // // //         "id": 14,
// // // // //         "name": "Massively Multiplayer"
// // // // //     },
// // // // //     {
// // // // //         "id": 15,
// // // // //         "name": "Fighting"
// // // // //     },
// // // // //     {
// // // // //         "id": 16,
// // // // //         "name": "Family"
// // // // //     },
// // // // //     {
// // // // //         "id": 17,
// // // // //         "name": "Board Games"
// // // // //     },
// // // // //     {
// // // // //         "id": 18,
// // // // //         "name": "Educational"
// // // // //     },
// // // // //     {
// // // // //         "id": 19,
// // // // //         "name": "Card"
// // // // //     }
// // // // // ]


// // // // [
// // // //     {
// // // //         "name": "Affenpinscher",
// // // //         "id": 1,
// // // //         "height": "23 - 29",
// // // //         "weight": "3 - 6",
// // // //         "life_span": "10 - 12 years",
// // // //         "image": "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg",
// // // //         "temperament": "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving"
// // // //     }
// // // // ]

// // // // // convert temperament to array of strings

// // // //Create a paginate with previous and next links
// // // // const paginate = (req, res, next) => {
// // // //     const page = parseInt(req.query.page) || 1;
// // // //     const limit = parseInt(req.query.limit) || 10;
// // // //     const startIndex = (page - 1) * limit;
// // // //     const endIndex = page * limit;
// // // //     const results = {};
// // // //     if (endIndex < res.total) {
// // // //         results.next = {
// // // //             page: page + 1,
// // // //             limit: limit
// // // //         };
// // // //     }
// // // //     if (startIndex > 0) {
// // // //         results.previous = {
// // // //             page: page - 1,
// // // //             limit: limit
// // // //         };
// // // //     }
// // // //     res.pagination = results;
// // // //     next();
// // // // }


// // // const pageNumbers = [];
// // //     for (let i = 1; i <= Math.ceil(allDogs.length / dogsPerPage); i++) {
// // //         pageNumbers.push(i);
// // //     }
// // //     return (
// // //         <nav>
// // //             {pageNumbers && pageNumbers.map((number) => (
// // //                 <div key={number}>
// // //                     <button onClick={() => paginado(number)}>{number}</button>
// // //                 </div>
// // //             ))}
// // //         </nav>
// // //     )

// // // case 'ORDER_BY_NAME':
// // //             let allDg = [...state.dogs]
// // //             allDg = allDg.sort((a,b) => {
// // //                 if(a.name.toLowerCase() < b.name.toLowerCase()){
// // //                     return action.payload === 'Asc' ? -1 : 1
// // //             }
// // //             if(a.name.toLowerCase() > b.name.toLowerCase()){
// // //                 return action.payload === 'Desc' ? -1 : 1
// // //             }
// // //             else{
// // //                 return 0
// // //             }
// // //             })
// // //             return {
// // //                 ...state,
// // //                 dogs: action.payload === 'All' ? state.allDogs : allDg,
// // //             }

// // // case 'ORDER_BY_CREATION':
// // //             let filter
// // //             if(state.filters.length === 0){
// // //                 let allDogsCreated = [...state.allDogs]
// // //                 filter = action.payload === 'api' ? allDogsCreated.filter(e=> !isNaN(e.id) === true) : allDogsCreated.filter(e => e.created === true)
// // //                 return {
// // //                     ...state,
// // //                     dogs: action.payload === 'all' ? allDogsCreated : filter
// // //                 }
// // //             } else if(state.filters.length > 0){
// // //                 let allDogsCreated = [...state.filters]
// // //                 filter = action.payload === 'api' ? allDogsCreated.filter(e => e.created === false) : allDogsCreated.filter(e => e.created === true)
// // //                 return {
// // //                     ...state,
// // //                     dogs: action.payload === 'all' ? allDogsCreated : filter
// // //                 }
// // //             } return

// /*-----------------------Paginado Carlos----------------------------

// //vayamos con el Paginado,
//    //nos basaremos en la alternativa de Piotr Beredecki, haremos uso del estado

// //Paso 1, ordenando a las razas
// const [currentPage, setCurrentPage] = useState(1);

// let dogsPerPage=8;
// function handleClick(event) {// necesitamos una funcion para ir alterando las cosas
//     setCurrentPage(
//     currentPage => Number(event.target.id)
//     )

// };
// //necesitamos que unos pocos elementos aparezcan de todas las razas
// let indiceFinal = currentPage * dogsPerPage;
// let indiceInicial = indiceFinal - dogsPerPage;
// let message;
// if (typeof razas === 'string'){ message =razas}
// let razasActuales = typeof razas !== 'string' && razas?.sort(sortMethods[sortState].method).filter(filtMethods[filt].method).slice(indiceInicial, indiceFinal);
// let longitud = typeof razas !== 'string' && razas?.sort(sortMethods[sortState].method).filter(filtMethods[filt].method).length
// // el slice es para que aprezcan los objetitos que yo deseo
// // el indiceFinal es para que muestren hasta cierto elemento(el cual es la cantidad de paginas por perros en ese instante) 
// // el indice inicial es necesario, pues asi nos aseguramos que se muestren la cantidad de razas (8) en esta pagina
// let razasRenderizadas =typeof razas !== 'string' && razasActuales?.map(can => <DogHome
//     id={can.id}
//     key={can.id}
//     name={can.name}
//     weight={can.weight}
//     temps={can.temp}
//     image={can.image}
//     Temperaments={can.Temperaments}
//     origin={can.origin}
//     />);// aqui ya vamos a mapear cada elemento, DogHome para todos


// /// Paso 2, Mostremos las paginas y el numero de cada una de ellas
// let pageNumbers = [];
// for (let i = 1; i <= Math.ceil(longitud/ dogsPerPage); i++) {
//     pageNumbers.push(i);
// }// el ceil es para aproximar por exceso, asi nos aseguramos de no excluir razas
// // cuando su cantidad sea distinta de 0 modulo 8( cuando no sea divisible)
// let numerosRenderizados = pageNumbers.map(number => {
//     return (//Pues aqui mostramos los numeros. Deberiamos usar botones
//     <button
//         key={number}
//         id={number}
//         onClick={handleClick}
//         className={ number%2 ===0? 'par': 'impar'}
//     >
//         {number}
//     </button>
//     );
// });
// //Paso 3... si bien la paginacion funciona, no es comodo para el usuario
// // ver tantos botones de paginas. Optimizaremos esto con botones de Prev y Next
// // usando Academind como referencia


// const[paginado, setPaginado] = React.useState(0);

// let pageLimit =10;/// porque si, vamos de 10 en 10
// //Definamos dos funciones mas, prev y next
// function prevPage(){
// setCurrentPage(
//     currentPage =>{
//     if(currentPage>1){
//         return currentPage-1;
//     } return 1;

//     }
// );
// setPaginado( paginado =>{if (currentPage>1){
// return Math.floor((currentPage-2) / pageLimit)
// } return 0;
// }
// )

// };
// function nextPage(){
// setCurrentPage(
//     currentPage =>{if(currentPage<pageNumbers.length){
//     return currentPage+1
//     }
//     return pageNumbers.length;
//     }
// )
// setPaginado( paginado => Math.floor((currentPage) / pageLimit))
// };
// //Ademas, necesitamos algo para mostrar solamente los puntos (botones deseados)
// // que representan nuestras paginas de razas
// //Hagamos el slice de los puntos (es que de lo contrario estaria pegando nomas)
// let sliceOfnumerosRederizados= numerosRenderizados.slice((pageLimit*paginado),(pageLimit*(paginado+1)));
// //paso 4, renderizar los botones correspondientes.. y ya seria todo


// -----------------------Paginado Carlos----------------------------*/



// // -------------------------------------------------------------------------REDUCER

// /*
// const allDogsTemps = [...state.dogs]
//             console.log(allDogsTemps)
//             const filterTemps = action.payload
//             let arr = []
//             if(filterTemps){
//                 allDogsTemps.forEach(dog => {
//                     if(dog.temperaments && typeof dog.temperaments === 'string'){
//                         if(dog.temperaments.includes(action.payload)) arr.push(dog)
//                         console.log(dog.temperaments)
//                     } else if(dog.temperaments && typeof dog.temperaments !== 'string'){
//                         dog.temperaments.map(e => {
//                             if(e.name.includes(action.payload)) arr.push(dog)
//                         })
//                     }
//                 })
//             }

// // -------------------------------------------------------------------------REDUCER
// */
/*
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

*/
let temp =
[
    {
        "name": "Affenpinscher",
        "id": 1,
        "height": "23 - 29",
        "weight": "3 - 6",
        "life_span": "10 - 12 years",
        "image": "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg",
        "temperaments": [
            "Stubborn",
            "Curious",
            "Playful",
            "Adventurous",
            "Active",
            "Fun-loving"
        ]
    },
    {
        "name": "Afghan Hound",
        "id": 2,
        "height": "64 - 69",
        "weight": "23 - 27",
        "life_span": "10 - 13 years",
        "image": "https://cdn2.thedogapi.com/images/hMyT4CDXR.jpg",
        "temperaments": [
            "Aloof",
            "Clownish",
            "Dignified",
            "Independent",
            "Happy"
        ]
    },
    {
        "name": "African Hunting Dog",
        "id": 3,
        "height": "76",
        "weight": "20 - 30",
        "life_span": "11 years",
        "image": "https://cdn2.thedogapi.com/images/rkiByec47.jpg",
        "temperaments": [
            "Wild",
            "Hardworking",
            "Dutiful"
        ]
    },
    {
        "name": "Airedale Terrier",
        "id": 4,
        "height": "53 - 58",
        "weight": "18 - 29",
        "life_span": "10 - 13 years",
        "image": "https://cdn2.thedogapi.com/images/1-7cgoZSh.jpg",
        "temperaments": [
            "Outgoing",
            "Friendly",
            "Alert",
            "Confident",
            "Intelligent",
            "Courageous"
        ]
    },
    {
        "name": "Akbash Dog",
        "id": 5,
        "height": "71 - 86",
        "weight": "41 - 54",
        "life_span": "10 - 12 years",
        "image": "https://cdn2.thedogapi.com/images/26pHT3Qk7.jpg",
        "temperaments": [
            "Loyal",
            "Independent",
            "Intelligent",
            "Brave"
        ]
    },
    {
        "name": "Akita",
        "id": 6,
        "height": "61 - 71",
        "weight": "29 - 52",
        "life_span": "10 - 14 years",
        "image": "https://cdn2.thedogapi.com/images/BFRYBufpm.jpg",
        "temperaments": [
            "Docile",
            "Alert",
            "Responsive",
            "Dignified",
            "Composed",
            "Friendly",
            "Receptive",
            "Faithful",
            "Courageous"
        ]
    },
    {
        "name": "Alapaha Blue Blood Bulldog",
        "id": 7,
        "height": "46 - 61",
        "weight": "25 - 41",
        "life_span": "12 - 13 years",
        "image": "https://cdn2.thedogapi.com/images/33mJ-V3RX.jpg",
        "temperaments": [
            "Loving",
            "Protective",
            "Trainable",
            "Dutiful",
            "Responsible"
        ]
    },
    {
        "name": "Alaskan Husky",
        "id": 8,
        "height": "58 - 66",
        "weight": "17 - 23",
        "life_span": "10 - 13 years",
        "image": "https://cdn2.thedogapi.com/images/-HgpNnGXl.jpg",
        "temperaments": [
            "Friendly",
            "Energetic",
            "Loyal",
            "Gentle",
            "Confident"
        ]
    },
    {
        "name": "Alaskan Malamute",
        "id": 9,
        "height": "58 - 64",
        "weight": "29 - 45",
        "life_span": "12 - 15 years",
        "image": "https://cdn2.thedogapi.com/images/dW5UucTIW.jpg",
        "temperaments": [
            "Friendly",
            "Affectionate",
            "Devoted",
            "Loyal",
            "Dignified",
            "Playful"
        ]
    },
    {
        "name": "American Bulldog",
        "id": 10,
        "height": "56 - 69",
        "weight": "27 - 54",
        "life_span": "10 - 12 years",
        "image": "https://cdn2.thedogapi.com/images/pk1AAdloG.jpg",
        "temperaments": [
            "Friendly",
            "Assertive",
            "Energetic",
            "Loyal",
            "Gentle",
            "Confident",
            "Dominant"
        ]
    },
    {
        "name": "American Bully",
        "id": 11,
        "height": "36 - 43",
        "weight": "14 - 68",
        "life_span": "8 – 15 years",
        "image": "https://cdn2.thedogapi.com/images/sqQJDtbpY.jpg",
        "temperaments": [
            "Strong Willed",
            "Stubborn",
            "Friendly",
            "Clownish",
            "Affectionate",
            "Loyal",
            "Obedient",
            "Intelligent",
            "Courageous"
        ]
    },
    {
        "name": "American Eskimo Dog",
        "id": 12,
        "height": "38 - 48",
        "weight": "9 - 18",
        "life_span": "12 - 15 years",
        "image": "https://cdn2.thedogapi.com/images/Bymjyec4m.jpg",
        "temperaments": [
            "Friendly",
            "Alert",
            "Reserved",
            "Intelligent",
            "Protective"
        ]
    },
    {
        "name": "American Eskimo Dog (Miniature)",
        "id": 13,
        "height": "23 - 30",
        "weight": "3 - 5",
        "life_span": "13 – 15 years",
        "image": "https://cdn2.thedogapi.com/images/_gn8GLrE6.jpg",
        "temperaments": [
            "Friendly",
            "Alert",
            "Reserved",
            "Intelligent",
            "Protective"
        ]
    },
    {
        "name": "American Foxhound",
        "id": 14,
        "height": "53 - 71",
        "weight": "29 - 34",
        "life_span": "8 - 15 years",
        "image": "https://cdn2.thedogapi.com/images/S14n1x9NQ.jpg",
        "temperaments": [
            "Kind",
            "Sweet-Tempered",
            "Loyal",
            "Independent",
            "Intelligent",
            "Loving"
        ]
    },
    {
        "name": "American Pit Bull Terrier",
        "id": 15,
        "height": "43 - 53",
        "weight": "14 - 27",
        "life_span": "10 - 15 years",
        "image": "https://cdn2.thedogapi.com/images/HkC31gcNm.png",
        "temperaments": [
            "Strong Willed",
            "Stubborn",
            "Friendly",
            "Clownish",
            "Affectionate",
            "Loyal",
            "Obedient",
            "Intelligent",
            "Courageous"
        ]
    },
    {
        "name": "American Staffordshire Terrier",
        "id": 16,
        "height": "43 - 48",
        "weight": "23 - 27",
        "life_span": "12 - 15 years",
        "image": "https://cdn2.thedogapi.com/images/rJIakgc4m.jpg",
        "temperaments": [
            "Tenacious",
            "Friendly",
            "Devoted",
            "Loyal",
            "Attentive",
            "Courageous"
        ]
    },
    {
        "name": "American Water Spaniel",
        "id": 17,
        "height": "38 - 46",
        "weight": "11 - 20",
        "life_span": "10 - 12 years",
        "image": "https://cdn2.thedogapi.com/images/SkmRJl9VQ.jpg",
        "temperaments": [
            "Friendly",
            "Energetic",
            "Obedient",
            "Intelligent",
            "Protective",
            "Trainable"
        ]
    },
    {
        "name": "Anatolian Shepherd Dog",
        "id": 18,
        "height": "69 - 74",
        "weight": "36 - 68",
        "life_span": "11 - 13 years",
        "image": "https://cdn2.thedogapi.com/images/BJT0Jx5Nm.jpg",
        "temperaments": [
            "Steady",
            "Bold",
            "Independent",
            "Confident",
            "Intelligent",
            "Proud"
        ]
    },
    {
        "name": "Appenzeller Sennenhund",
        "id": 19,
        "height": "51 - 56",
        "weight": "22 - 25",
        "life_span": "12 – 14 years",
        "image": "https://cdn2.thedogapi.com/images/HkNkxlqEX.jpg",
        "temperaments": [
            "Reliable",
            "Fearless",
            "Energetic",
            "Lively",
            "Self-assured"
        ]
    },
    {
        "name": "Australian Cattle Dog",
        "id": 21,
        "height": "43 - 51",
        "weight": "20 - 28",
        "life_span": "12 - 14 years",
        "image": "https://cdn2.thedogapi.com/images/IBkYVm4v1.jpg",
        "temperaments": [
            "Cautious",
            "Energetic",
            "Loyal",
            "Obedient",
            "Protective",
            "Brave"
        ]
    },
    {
        "name": "Australian Kelpie",
        "id": 22,
        "height": "43 - 51",
        "weight": "14 - 21",
        "life_span": "10 - 13 years",
        "image": "https://cdn2.thedogapi.com/images/Hyq1ge9VQ.jpg",
        "temperaments": [
            "Friendly",
            "Energetic",
            "Alert",
            "Loyal",
            "Intelligent",
            "Eager"
        ]
    },
    {
        "name": "Australian Shepherd",
        "id": 23,
        "height": "46 - 58",
        "weight": "16 - 29",
        "life_span": "12 - 16 years",
        "image": "https://cdn2.thedogapi.com/images/B1-llgq4m.jpg",
        "temperaments": [
            "Good-natured",
            "Affectionate",
            "Intelligent",
            "Active",
            "Protective"
        ]
    },
    {
        "name": "Australian Terrier",
        "id": 24,
        "height": "25 - 28",
        "weight": "6 - 7",
        "life_span": "15 years",
        "image": "https://cdn2.thedogapi.com/images/r1Ylge5Vm.jpg",
        "temperaments": [
            "Spirited",
            "Alert",
            "Loyal",
            "Companionable",
            "Even Tempered",
            "Courageous"
        ]
    },
    {
        "name": "Azawakh",
        "id": 25,
        "height": "58 - 74",
        "weight": "15 - 25",
        "life_span": "10 - 13 years",
        "image": "https://cdn2.thedogapi.com/images/SkvZgx94m.jpg",
        "temperaments": [
            "Aloof",
            "Affectionate",
            "Attentive",
            "Rugged",
            "Fierce",
            "Refined"
        ]
    },
    {
        "name": "Barbet",
        "id": 26,
        "height": "51 - 66",
        "weight": "18 - 29",
        "life_span": "13 – 15 years",
        "image": "https://cdn2.thedogapi.com/images/HyWGexcVQ.jpg",
        "temperaments": [
            "Obedient",
            "Companionable",
            "Intelligent",
            "Joyful"
        ]
    },
    {
        "name": "Basenji",
        "id": 28,
        "height": "41 - 43",
        "weight": "10 - 11",
        "life_span": "10 - 12 years",
        "image": "https://cdn2.thedogapi.com/images/H1dGlxqNQ.jpg",
        "temperaments": [
            "Affectionate",
            "Energetic",
            "Alert",
            "Curious",
            "Playful",
            "Intelligent"
        ]
    },
    {
        "name": "Basset Bleu de Gascogne",
        "id": 29,
        "height": "33 - 38",
        "weight": "16 - 18",
        "life_span": "10 - 14 years",
        "image": "https://cdn2.thedogapi.com/images/BkMQll94X.jpg",
        "temperaments": [
            "Affectionate",
            "Lively",
            "Agile",
            "Curious",
            "Happy",
            "Active"
        ]
    },
    {
        "name": "Basset Hound",
        "id": 30,
        "height": "36",
        "weight": "23 - 29",
        "life_span": "12 - 15 years",
        "image": "https://cdn2.thedogapi.com/images/Sy57xx9EX.jpg",
        "temperaments": [
            "Tenacious",
            "Friendly",
            "Affectionate",
            "Devoted",
            "Sweet-Tempered",
            "Gentle"
        ]
    },
    {
        "name": "Beagle",
        "id": 31,
        "height": "33 - 38",
        "weight": "9 - 16",
        "life_span": "13 - 16 years",
        "image": "https://cdn2.thedogapi.com/images/Syd4xxqEm.jpg",
        "temperaments": [
            "Amiable",
            "Even Tempered",
            "Excitable",
            "Determined",
            "Gentle",
            "Intelligent"
        ]
    },
    {
        "name": "Bearded Collie",
        "id": 32,
        "height": "51 - 56",
        "weight": "20 - 25",
        "life_span": "12 - 14 years",
        "image": "https://cdn2.thedogapi.com/images/A09F4c1qP.jpg",
        "temperaments": [
            "Self-confidence",
            "Hardy",
            "Lively",
            "Alert",
            "Intelligent",
            "Active"
        ]
    },
    {
        "name": "Beauceron",
        "id": 33,
        "height": "61 - 70",
        "weight": "36 - 50",
        "life_span": "10 - 12 years",
        "image": "https://cdn2.thedogapi.com/images/HJQ8ge5V7.jpg",
        "temperaments": [
            "Fearless",
            "Friendly",
            "Intelligent",
            "Protective",
            "Calm"
        ]
    },
    {
        "name": "Bedlington Terrier",
        "id": 34,
        "height": "38 - 41",
        "weight": "8 - 10",
        "life_span": "14 - 16 years",
        "image": "https://cdn2.thedogapi.com/images/ByK8gx947.jpg",
        "temperaments": [
            "Affectionate",
            "Spirited",
            "Intelligent",
            "Good-tempered"
        ]
    },
    {
        "name": "Belgian Malinois",
        "id": 36,
        "height": "56 - 66",
        "weight": "18 - 36",
        "life_span": "12 - 14 years",
        "image": "https://cdn2.thedogapi.com/images/r1f_ll5VX.jpg",
        "temperaments": [
            "Watchful",
            "Alert",
            "Stubborn",
            "Friendly",
            "Confident",
            "Hard-working",
            "Active",
            "Protective"
        ]
    },
    {
        "name": "Belgian Tervuren",
        "id": 38,
        "height": "56 - 66",
        "weight": "18 - 29",
        "life_span": "10 - 12 years",
        "image": "https://cdn2.thedogapi.com/images/B1KdxlcNX.jpg",
        "temperaments": [
            "Energetic",
            "Alert",
            "Loyal",
            "Intelligent",
            "Attentive",
            "Protective"
        ]
    },
    {
        "name": "Bernese Mountain Dog",
        "id": 41,
        "height": "58 - 70",
        "weight": "29 - 54",
        "life_span": "7 - 10 years",
        "image": "https://cdn2.thedogapi.com/images/S1fFlx5Em.jpg",
        "temperaments": [
            "Affectionate",
            "Loyal",
            "Intelligent",
            "Faithful"
        ]
    },
    {
        "name": "Bichon Frise",
        "id": 42,
        "height": "24 - 29",
        "weight": "5 - 8",
        "life_span": "15 years",
        "image": "https://cdn2.thedogapi.com/images/HkuYlxqEQ.jpg",
        "temperaments": [
            "Feisty",
            "Affectionate",
            "Cheerful",
            "Playful",
            "Gentle",
            "Sensitive"
        ]
    },
    {
        "name": "Black and Tan Coonhound",
        "id": 43,
        "height": "58 - 69",
        "weight": "29 - 45",
        "life_span": "10 - 12 years",
        "image": "https://cdn2.thedogapi.com/images/HJAFgxcNQ.jpg",
        "temperaments": [
            "Easygoing",
            "Gentle",
            "Adaptable",
            "Trusting",
            "Even Tempered",
            "Lovable"
        ]
    },
    {
        "name": "Bloodhound",
        "id": 45,
        "height": "58 - 69",
        "weight": "36 - 50",
        "life_span": "8 - 10 years",
        "image": "https://cdn2.thedogapi.com/images/Skdcgx9VX.jpg",
        "temperaments": [
            "Stubborn",
            "Affectionate",
            "Gentle",
            "Even Tempered"
        ]
    },
    {
        "name": "Bluetick Coonhound",
        "id": 47,
        "height": "53 - 69",
        "weight": "20 - 36",
        "life_span": "12 - 14 years",
        "image": "https://cdn2.thedogapi.com/images/rJxieg9VQ.jpg",
        "temperaments": [
            "Friendly",
            "Intelligent",
            "Active"
        ]
    },
    {
        "name": "Boerboel",
        "id": 48,
        "height": "56 - 69",
        "weight": "50 - 91",
        "life_span": "10 - 12 years",
        "image": "https://cdn2.thedogapi.com/images/HyOjge5Vm.jpg",
        "temperaments": [
            "Obedient",
            "Confident",
            "Intelligent",
            "Dominant",
            "Territorial"
        ]
    },
    {
        "name": "Border Collie",
        "id": 50,
        "height": "46 - 56",
        "weight": "14 - 20",
        "life_span": "12 - 16 years",
        "image": "https://cdn2.thedogapi.com/images/sGQvQUpsp.jpg",
        "temperaments": [
            "Tenacious",
            "Keen",
            "Energetic",
            "Responsive",
            "Alert",
            "Intelligent"
        ]
    },
    {
        "name": "Border Terrier",
        "id": 51,
        "height": "28 - 41",
        "weight": "5 - 7",
        "life_span": "12 - 14 years",
        "image": "https://cdn2.thedogapi.com/images/HJOpge9Em.jpg",
        "temperaments": [
            "Fearless",
            "Affectionate",
            "Alert",
            "Obedient",
            "Intelligent",
            "Even Tempered"
        ]
    },
    {
        "name": "Boston Terrier",
        "id": 53,
        "height": "41 - 43",
        "weight": "5 - 11",
        "life_span": "11 - 13 years",
        "image": "https://cdn2.thedogapi.com/images/rkZRggqVX.jpg",
        "temperaments": [
            "Friendly",
            "Lively",
            "Intelligent"
        ]
    },
    {
        "name": "Bouvier des Flandres",
        "id": 54,
        "height": "60 - 70",
        "weight": "32 - 50",
        "life_span": "10 - 15 years",
        "image": "https://cdn2.thedogapi.com/images/Byd0xl5VX.jpg",
        "temperaments": [
            "Protective",
            "Loyal",
            "Gentle",
            "Intelligent",
            "Familial",
            "Rational"
        ]
    },
    {
        "name": "Boxer",
        "id": 55,
        "height": "55 - 64",
        "weight": "23 - 32",
        "life_span": "8 - 10 years",
        "image": "https://cdn2.thedogapi.com/images/ry1kWe5VQ.jpg",
        "temperaments": [
            "Devoted",
            "Fearless",
            "Friendly",
            "Cheerful",
            "Energetic",
            "Loyal",
            "Playful",
            "Confident",
            "Intelligent",
            "Bright",
            "Brave",
            "Calm"
        ]
    },
    {
        "name": "Boykin Spaniel",
        "id": 56,
        "height": "36 - 46",
        "weight": "11 - 18",
        "life_span": "10 - 14 years",
        "image": "https://cdn2.thedogapi.com/images/ryHJZlcNX.jpg",
        "temperaments": [
            "Friendly",
            "Energetic",
            "Companionable",
            "Intelligent",
            "Eager",
            "Trainable"
        ]
    },
    {
        "name": "Bracco Italiano",
        "id": 57,
        "height": "55 - 67",
        "weight": "25 - 40",
        "life_span": "10 - 12 years",
        "image": "https://cdn2.thedogapi.com/images/S13yZg5VQ.jpg",
        "temperaments": [
            "Stubborn",
            "Affectionate",
            "Loyal",
            "Playful",
            "Companionable",
            "Trainable"
        ]
    },
    {
        "name": "Briard",
        "id": 58,
        "height": "56 - 69",
        "weight": "32 - 41",
        "life_span": "10 - 12 years",
        "image": "https://cdn2.thedogapi.com/images/rkVlblcEQ.jpg",
        "temperaments": [
            "Fearless",
            "Loyal",
            "Obedient",
            "Intelligent",
            "Faithful",
            "Protective"
        ]
    },
    {
        "name": "Brittany",
        "id": 59,
        "height": "44 - 52",
        "weight": "14 - 20",
        "life_span": "12 - 14 years",
        "image": "https://cdn2.thedogapi.com/images/HJWZZxc4X.jpg",
        "temperaments": [
            "Agile",
            "Adaptable",
            "Quick",
            "Intelligent",
            "Attentive",
            "Happy"
        ]
    },
    {
        "name": "Bull Terrier",
        "id": 61,
        "height": "53 - 56",
        "weight": "23 - 32",
        "life_span": "10 - 12 years",
        "image": "https://cdn2.thedogapi.com/images/VSraIEQGd.jpg",
        "temperaments": [
            "Trainable",
            "Protective",
            "Sweet-Tempered",
            "Keen",
            "Active"
        ]
    },
    {
        "name": "Bull Terrier (Miniature)",
        "id": 62,
        "height": "25 - 36",
        "weight": "11 - 15",
        "life_span": "11 – 14 years",
        "image": "https://cdn2.thedogapi.com/images/BkKZWlcVX.jpg",
        "temperaments": [
            "Trainable",
            "Protective",
            "Sweet-Tempered",
            "Keen",
            "Active",
            "Territorial"
        ]
    },
    {
        "name": "Bullmastiff",
        "id": 64,
        "height": "61 - 69",
        "weight": "45 - 59",
        "life_span": "8 - 12 years",
        "image": "https://cdn2.thedogapi.com/images/r1ifZl5E7.jpg",
        "temperaments": [
            "Docile",
            "Reliable",
            "Devoted",
            "Alert",
            "Loyal",
            "Reserved",
            "Loving",
            "Protective",
            "Powerful",
            "Calm",
            "Courageous"
        ]
    },
    {
        "name": "Cairn Terrier",
        "id": 65,
        "height": "23 - 25",
        "weight": "6 - 6",
        "life_span": "14 - 15 years",
        "image": "https://cdn2.thedogapi.com/images/Sk7Qbg9E7.jpg",
        "temperaments": [
            "Hardy",
            "Fearless",
            "Assertive",
            "Gay",
            "Intelligent",
            "Active"
        ]
    },
    {
        "name": "Cane Corso",
        "id": 67,
        "height": "60 - 70",
        "weight": "40 - 54",
        "life_span": "10 - 11 years",
        "image": "https://cdn2.thedogapi.com/images/r15m-lc4m.jpg",
        "temperaments": [
            "Trainable",
            "Reserved",
            "Stable",
            "Quiet",
            "Even Tempered",
            "Calm"
        ]
    },
    {
        "name": "Cardigan Welsh Corgi",
        "id": 68,
        "height": "27 - 32",
        "weight": "11 - 17",
        "life_span": "12 - 14 years",
        "image": "https://cdn2.thedogapi.com/images/SyXN-e9NX.jpg",
        "temperaments": [
            "Affectionate",
            "Devoted",
            "Alert",
            "Companionable",
            "Intelligent",
            "Active"
        ]
    },
    {
        "name": "Catahoula Leopard Dog",
        "id": 69,
        "height": "51 - 66",
        "weight": "23 - 43",
        "life_span": "10 - 12 years",
        "image": "https://cdn2.thedogapi.com/images/BJcNbec4X.jpg",
        "temperaments": [
            "Energetic",
            "Inquisitive",
            "Independent",
            "Gentle",
            "Intelligent",
            "Loving"
        ]
    },
    {
        "name": "Caucasian Shepherd (Ovcharka)",
        "id": 70,
        "height": "61 - 85",
        "weight": "36 - 45",
        "life_span": "10 - 12 years",
        "image": "https://cdn2.thedogapi.com/images/r1rrWe5Em.jpg",
        "temperaments": [
            "Alert",
            "Quick",
            "Dominant",
            "Powerful",
            "Calm",
            "Strong"
        ]
    },
    {
        "name": "Cavalier King Charles Spaniel",
        "id": 71,
        "height": "30 - 33",
        "weight": "6 - 8",
        "life_span": "10 - 14 years",
        "image": "https://cdn2.thedogapi.com/images/HJRBbe94Q.jpg",
        "temperaments": [
            "Fearless",
            "Affectionate",
            "Sociable",
            "Patient",
            "Playful",
            "Adaptable"
        ]
    },
    {
        "name": "Chesapeake Bay Retriever",
        "id": 76,
        "height": "53 - 66",
        "weight": "25 - 36",
        "life_span": "10 - 13 years",
        "image": "https://cdn2.thedogapi.com/images/9BXwUeCc2.jpg",
        "temperaments": [
            "Affectionate",
            "Intelligent",
            "Quiet",
            "Dominant",
            "Happy",
            "Protective"
        ]
    },
    {
        "name": "Chinese Crested",
        "id": 78,
        "height": "28 - 33",
        "weight": "5 - 6",
        "life_span": "10 - 14 years",
        "image": "https://cdn2.thedogapi.com/images/B1pDZx9Nm.jpg",
        "temperaments": [
            "Affectionate",
            "Sweet-Tempered",
            "Lively",
            "Alert",
            "Playful",
            "Happy"
        ]
    },
    {
        "name": "Chinese Shar-Pei",
        "id": 79,
        "height": "46 - 51",
        "weight": "20 - 27",
        "life_span": "10 years",
        "image": "https://cdn2.thedogapi.com/images/B1ruWl94Q.jpg",
        "temperaments": [
            "Suspicious",
            "Affectionate",
            "Devoted",
            "Reserved",
            "Independent",
            "Loving"
        ]
    },
    {
        "name": "Chinook",
        "id": 80,
        "height": "56 - 66",
        "weight": "23 - 41",
        "life_span": "12 - 15 years",
        "image": "https://cdn2.thedogapi.com/images/Sypubg54Q.jpg",
        "temperaments": [
            "Friendly",
            "Alert",
            "Dignified",
            "Intelligent",
            "Calm"
        ]
    },
    {
        "name": "Chow Chow",
        "id": 81,
        "height": "43 - 51",
        "weight": "18 - 32",
        "life_span": "12 - 15 years",
        "image": "https://cdn2.thedogapi.com/images/ry8KWgqEQ.jpg",
        "temperaments": [
            "Aloof",
            "Loyal",
            "Independent",
            "Quiet"
        ]
    },
    {
        "name": "Clumber Spaniel",
        "id": 84,
        "height": "43 - 51",
        "weight": "25 - 39",
        "life_span": "10 - 12 years",
        "image": "https://cdn2.thedogapi.com/images/rkeqWgq4Q.jpg",
        "temperaments": [
            "Affectionate",
            "Loyal",
            "Dignified",
            "Gentle",
            "Calm",
            "Great-hearted"
        ]
    },
    {
        "name": "Cocker Spaniel",
        "id": 86,
        "height": "36 - 38",
        "weight": "9 - 14",
        "life_span": "12 - 15 years",
        "image": "https://cdn2.thedogapi.com/images/1lFmrzECl.jpg",
        "temperaments": [
            "Trainable",
            "Friendly",
            "Affectionate",
            "Playful",
            "Quiet",
            "Faithful"
        ]
    },
    {
        "name": "Cocker Spaniel (American)",
        "id": 87,
        "height": "36 - 38",
        "weight": "9 - 14",
        "life_span": "12 - 15 years",
        "image": "https://cdn2.thedogapi.com/images/HkRcZe547.jpg",
        "temperaments": [
            "Outgoing",
            "Sociable",
            "Trusting",
            "Joyful",
            "Even Tempered",
            "Merry"
        ]
    },
    {
        "name": "Coton de Tulear",
        "id": 89,
        "height": "23 - 28",
        "weight": "4 - 7",
        "life_span": "13 - 16 years",
        "image": "https://cdn2.thedogapi.com/images/SyviZlqNm.jpg",
        "temperaments": [
            "Affectionate",
            "Lively",
            "Playful",
            "Intelligent",
            "Trainable",
            "Vocal"
        ]
    },
    {
        "name": "Dalmatian",
        "id": 92,
        "height": "48 - 58",
        "weight": "23 - 25",
        "life_span": "10 - 13 years",
        "image": "https://cdn2.thedogapi.com/images/SkJ3blcN7.jpg",
        "temperaments": [
            "Outgoing",
            "Friendly",
            "Energetic",
            "Playful",
            "Sensitive",
            "Intelligent",
            "Active"
        ]
    },
    {
        "name": "Doberman Pinscher",
        "id": 94,
        "height": "61 - 71",
        "weight": "30 - 40",
        "life_span": "10 years",
        "image": "https://cdn2.thedogapi.com/images/HyL3bl94Q.jpg",
        "temperaments": [
            "Fearless",
            "Energetic",
            "Alert",
            "Loyal",
            "Obedient",
            "Confident",
            "Intelligent"
        ]
    },
    {
        "name": "Dogo Argentino",
        "id": 95,
        "height": "60 - 69",
        "weight": "36 - 45",
        "life_span": "10 - 12 years",
        "image": "https://cdn2.thedogapi.com/images/S1nhWx94Q.jpg",
        "temperaments": [
            "Friendly",
            "Affectionate",
            "Cheerful",
            "Loyal",
            "Tolerant",
            "Protective"
        ]
    },
    {
        "name": "Dutch Shepherd",
        "id": 98,
        "height": "56 - 62",
        "weight": "23 - 32",
        "life_span": "15 years",
        "image": "https://cdn2.thedogapi.com/images/BkE6Wg5E7.jpg",
        "temperaments": [
            "Reliable",
            "Affectionate",
            "Alert",
            "Loyal",
            "Obedient",
            "Trainable"
        ]
    },
    {
        "name": "English Setter",
        "id": 101,
        "height": "61 - 64",
        "weight": "20 - 36",
        "life_span": "12 years",
        "image": "https://cdn2.thedogapi.com/images/By4A-eqVX.jpg",
        "temperaments": [
            "Strong Willed",
            "Mischievous",
            "Affectionate",
            "Energetic",
            "Playful",
            "Companionable",
            "Gentle",
            "Hard-working",
            "Intelligent",
            "Eager",
            "People-Oriented"
        ]
    },
    {
        "name": "English Shepherd",
        "id": 102,
        "height": "46 - 58",
        "weight": "20 - 30",
        "life_span": "10 - 13 years",
        "image": "https://cdn2.thedogapi.com/images/H1QyMe5EQ.jpg",
        "temperaments": [
            "Kind",
            "Energetic",
            "Independent",
            "Adaptable",
            "Intelligent",
            "Bossy"
        ]
    },
    {
        "name": "English Springer Spaniel",
        "id": 103,
        "height": "48 - 51",
        "weight": "16 - 23",
        "life_span": "12 - 14 years",
        "image": "https://cdn2.thedogapi.com/images/Hk0Jfe5VQ.jpg",
        "temperaments": [
            "Affectionate",
            "Cheerful",
            "Alert",
            "Intelligent",
            "Attentive",
            "Active"
        ]
    },
    {
        "name": "English Toy Spaniel",
        "id": 104,
        "height": "25",
        "weight": "4 - 6",
        "life_span": "10 - 12 years",
        "image": "https://cdn2.thedogapi.com/images/SkIgzxqNQ.jpg",
        "temperaments": [
            "Affectionate",
            "Reserved",
            "Playful",
            "Gentle",
            "Happy",
            "Loving"
        ]
    },
    {
        "name": "English Toy Terrier",
        "id": 105,
        "height": "25 - 30",
        "weight": "3 - 4",
        "life_span": "12 - 13 years",
        "image": "https://cdn2.thedogapi.com/images/SJ6eMxqEQ.jpg",
        "temperaments": [
            "Stubborn",
            "Alert",
            "Companionable",
            "Intelligent",
            "Cunning",
            "Trainable"
        ]
    },
    {
        "name": "Eurasier",
        "id": 107,
        "height": "52 - 60",
        "weight": "18 - 32",
        "life_span": "12 - 14 years",
        "image": "https://cdn2.thedogapi.com/images/S1VWGx9Nm.jpg",
        "temperaments": [
            "Alert",
            "Reserved",
            "Intelligent",
            "Even Tempered",
            "Watchful",
            "Calm"
        ]
    },
    {
        "name": "Field Spaniel",
        "id": 108,
        "height": "43 - 46",
        "weight": "16 - 23",
        "life_span": "11 - 15 years",
        "image": "https://cdn2.thedogapi.com/images/SkJfGecE7.jpg",
        "temperaments": [
            "Docile",
            "Cautious",
            "Sociable",
            "Sensitive",
            "Adaptable",
            "Familial"
        ]
    },
    {
        "name": "Finnish Lapphund",
        "id": 110,
        "height": "41 - 53",
        "weight": "15 - 24",
        "life_span": "12 - 15 years",
        "image": "https://cdn2.thedogapi.com/images/S1KMGg5Vm.jpg",
        "temperaments": [
            "Friendly",
            "Keen",
            "Faithful",
            "Calm",
            "Courageous"
        ]
    },
    {
        "name": "Finnish Spitz",
        "id": 111,
        "height": "39 - 51",
        "weight": "10 - 13",
        "life_span": "12 - 15 years",
        "image": "https://cdn2.thedogapi.com/images/3PjHlQbkV.jpg",
        "temperaments": [
            "Playful",
            "Loyal",
            "Independent",
            "Intelligent",
            "Happy",
            "Vocal"
        ]
    },
    {
        "name": "French Bulldog",
        "id": 113,
        "height": "28 - 30",
        "weight": "13",
        "life_span": "9 - 11 years",
        "image": "https://cdn2.thedogapi.com/images/HyWNfxc47.jpg",
        "temperaments": [
            "Playful",
            "Affectionate",
            "Keen",
            "Sociable",
            "Lively",
            "Alert",
            "Easygoing",
            "Patient",
            "Athletic",
            "Bright"
        ]
    },
    {
        "name": "German Pinscher",
        "id": 114,
        "height": "43 - 51",
        "weight": "11 - 20",
        "life_span": "12 - 14 years",
        "image": "https://cdn2.thedogapi.com/images/B1u4zgqE7.jpg",
        "temperaments": [
            "Spirited",
            "Lively",
            "Intelligent",
            "Loving",
            "Even Tempered",
            "Familial"
        ]
    },
    {
        "name": "German Shepherd Dog",
        "id": 115,
        "height": "56 - 66",
        "weight": "23 - 41",
        "life_span": "10 - 13 years",
        "image": "https://cdn2.thedogapi.com/images/SJyBfg5NX.jpg",
        "temperaments": [
            "Alert",
            "Loyal",
            "Obedient",
            "Curious",
            "Confident",
            "Intelligent",
            "Watchful",
            "Courageous"
        ]
    },
    {
        "name": "German Shorthaired Pointer",
        "id": 116,
        "height": "53 - 64",
        "weight": "20 - 32",
        "life_span": "12 - 14 years",
        "image": "https://cdn2.thedogapi.com/images/SJqBMg5Nm.jpg",
        "temperaments": [
            "Boisterous",
            "Bold",
            "Affectionate",
            "Intelligent",
            "Cooperative",
            "Trainable"
        ]
    },
    {
        "name": "Giant Schnauzer",
        "id": 119,
        "height": "60 - 70",
        "weight": "29 - 41",
        "life_span": "10 - 12 years",
        "image": "https://cdn2.thedogapi.com/images/H1NIzlcV7.jpg",
        "temperaments": [
            "Strong Willed",
            "Kind",
            "Loyal",
            "Intelligent",
            "Dominant",
            "Powerful"
        ]
    },
    {
        "name": "Glen of Imaal Terrier",
        "id": 120,
        "height": "32 - 36",
        "weight": "15 - 18",
        "life_span": "12 - 15 years",
        "image": "https://cdn2.thedogapi.com/images/H1oLMe94m.jpg",
        "temperaments": [
            "Spirited",
            "Agile",
            "Loyal",
            "Gentle",
            "Active",
            "Courageous"
        ]
    },
    {
        "name": "Golden Retriever",
        "id": 121,
        "height": "55 - 61",
        "weight": "25 - 34",
        "life_span": "10 - 12 years",
        "image": "https://cdn2.thedogapi.com/images/HJ7Pzg5EQ.jpg",
        "temperaments": [
            "Intelligent",
            "Kind",
            "Reliable",
            "Friendly",
            "Trustworthy",
            "Confident"
        ]
    },
    {
        "name": "Gordon Setter",
        "id": 123,
        "height": "58 - 69",
        "weight": "20 - 36",
        "life_span": "10 - 12 years",
        "image": "https://cdn2.thedogapi.com/images/SJ5vzx5NX.jpg",
        "temperaments": [
            "Fearless",
            "Alert",
            "Loyal",
            "Confident",
            "Gay",
            "Eager"
        ]
    },
    {
        "name": "Great Dane",
        "id": 124,
        "height": "71 - 81",
        "weight": "50 - 86",
        "life_span": "7 - 10 years",
        "image": "https://cdn2.thedogapi.com/images/B1Edfl9NX.jpg",
        "temperaments": [
            "Friendly",
            "Devoted",
            "Reserved",
            "Gentle",
            "Confident",
            "Loving"
        ]
    },
    {
        "name": "Great Pyrenees",
        "id": 125,
        "height": "64 - 81",
        "weight": "39 - 52",
        "life_span": "10 - 12 years",
        "image": "https://cdn2.thedogapi.com/images/B12uzg9V7.png",
        "temperaments": [
            "Strong Willed",
            "Fearless",
            "Affectionate",
            "Patient",
            "Gentle",
            "Confident"
        ]
    },
    {
        "name": "Greyhound",
        "id": 127,
        "height": "69 - 76",
        "weight": "23 - 32",
        "life_span": "10 - 13 years",
        "image": "https://cdn2.thedogapi.com/images/ryNYMx94X.jpg",
        "temperaments": [
            "Affectionate",
            "Athletic",
            "Gentle",
            "Intelligent",
            "Quiet",
            "Even Tempered"
        ]
    },
    {
        "name": "Griffon Bruxellois",
        "id": 128,
        "height": "23 - 28",
        "weight": "5",
        "life_span": "10 – 15 years",
        "image": "https://cdn2.thedogapi.com/images/ryoYGec4Q.jpg",
        "temperaments": [
            "Self-important",
            "Inquisitive",
            "Alert",
            "Companionable",
            "Sensitive",
            "Watchful"
        ]
    },
    {
        "name": "Harrier",
        "id": 129,
        "height": "46 - 56",
        "weight": "18 - 27",
        "life_span": "12 - 15 years",
        "image": "https://cdn2.thedogapi.com/images/B1IcfgqE7.jpg",
        "temperaments": [
            "Outgoing",
            "Friendly",
            "Cheerful",
            "Sweet-Tempered",
            "Tolerant",
            "Active"
        ]
    },
    {
        "name": "Havanese",
        "id": 130,
        "height": "22 - 29",
        "weight": "3 - 6",
        "life_span": "14 - 15 years",
        "image": "https://cdn2.thedogapi.com/images/rkXiGl9V7.jpg",
        "temperaments": [
            "Affectionate",
            "Responsive",
            "Playful",
            "Companionable",
            "Gentle",
            "Intelligent"
        ]
    },
    {
        "name": "Irish Setter",
        "id": 134,
        "height": "61 - 69",
        "weight": "16 - 32",
        "life_span": "10 - 11 years",
        "image": "https://cdn2.thedogapi.com/images/S1osGeqVm.jpg",
        "temperaments": [
            "Affectionate",
            "Energetic",
            "Lively",
            "Independent",
            "Playful",
            "Companionable"
        ]
    },
    {
        "name": "Irish Terrier",
        "id": 135,
        "height": "46",
        "weight": "11 - 12",
        "life_span": "12 - 16 years",
        "image": "https://cdn2.thedogapi.com/images/By-hGecVX.jpg",
        "temperaments": [
            "Respectful",
            "Lively",
            "Intelligent",
            "Dominant",
            "Protective",
            "Trainable"
        ]
    },
    {
        "name": "Irish Wolfhound",
        "id": 137,
        "height": "76 - 89",
        "weight": "48 - 82",
        "life_span": "6 - 8 years",
        "image": "https://cdn2.thedogapi.com/images/Hyd2zgcEX.jpg",
        "temperaments": [
            "Sweet-Tempered",
            "Loyal",
            "Dignified",
            "Patient",
            "Thoughtful",
            "Generous"
        ]
    },
    {
        "name": "Italian Greyhound",
        "id": 138,
        "height": "33 - 38",
        "weight": "3 - 7",
        "life_span": "12 - 15 years",
        "image": "https://cdn2.thedogapi.com/images/SJAnzg9NX.jpg",
        "temperaments": [
            "Mischievous",
            "Affectionate",
            "Agile",
            "Athletic",
            "Companionable",
            "Intelligent"
        ]
    },
    {
        "name": "Japanese Chin",
        "id": 140,
        "height": "20 - 28",
        "weight": "2 - 4",
        "life_span": "12 - 14 years",
        "image": "https://cdn2.thedogapi.com/images/r1H6feqEm.jpg",
        "temperaments": [
            "Alert",
            "Loyal",
            "Independent",
            "Intelligent",
            "Loving",
            "Cat-like"
        ]
    },
    {
        "name": "Japanese Spitz",
        "id": 141,
        "height": "30 - 38",
        "weight": "7 - 9",
        "life_span": "10 – 16 years",
        "image": "https://cdn2.thedogapi.com/images/HksaMxqNX.jpg",
        "temperaments": [
            "Affectionate",
            "Obedient",
            "Playful",
            "Companionable",
            "Intelligent",
            "Proud"
        ]
    },
    {
        "name": "Keeshond",
        "id": 142,
        "height": "43 - 46",
        "weight": "16 - 20",
        "life_span": "12 - 15 years",
        "image": "https://cdn2.thedogapi.com/images/S1GAGg9Vm.jpg",
        "temperaments": [
            "Agile",
            "Obedient",
            "Playful",
            "Quick",
            "Sturdy",
            "Bright"
        ]
    },
    {
        "name": "Komondor",
        "id": 144,
        "height": "65 - 70",
        "weight": "36 - 45",
        "life_span": "10 - 12 years",
        "image": "https://cdn2.thedogapi.com/images/Bko0fl547.jpg",
        "temperaments": [
            "Steady",
            "Fearless",
            "Affectionate",
            "Independent",
            "Gentle",
            "Calm"
        ]
    },
    {
        "name": "Kooikerhondje",
        "id": 145,
        "height": "36 - 41",
        "weight": "9 - 14",
        "life_span": "12 - 15 years",
        "image": "https://cdn2.thedogapi.com/images/kOMy84GQE.jpg",
        "temperaments": [
            "Benevolent",
            "Agile",
            "Alert",
            "Intelligent",
            "Active",
            "Territorial"
        ]
    },
    {
        "name": "Kuvasz",
        "id": 147,
        "height": "66 - 76",
        "weight": "32 - 52",
        "life_span": "8 - 10 years",
        "image": "https://cdn2.thedogapi.com/images/BykZ7ecVX.jpg",
        "temperaments": [
            "Clownish",
            "Loyal",
            "Patient",
            "Independent",
            "Intelligent",
            "Protective"
        ]
    },
    {
        "name": "Labrador Retriever",
        "id": 149,
        "height": "55 - 62",
        "weight": "25 - 36",
        "life_span": "10 - 13 years",
        "image": "https://cdn2.thedogapi.com/images/B1uW7l5VX.jpg",
        "temperaments": [
            "Kind",
            "Outgoing",
            "Agile",
            "Gentle",
            "Intelligent",
            "Trusting",
            "Even Tempered"
        ]
    },
    {
        "name": "Lagotto Romagnolo",
        "id": 151,
        "height": "41 - 48",
        "weight": "11 - 16",
        "life_span": "14 - 16 years",
        "image": "https://cdn2.thedogapi.com/images/ryzzmgqE7.jpg",
        "temperaments": [
            "Keen",
            "Loyal",
            "Companionable",
            "Loving",
            "Active",
            "Trainable"
        ]
    },
    {
        "name": "Lancashire Heeler",
        "id": 153,
        "height": "25 - 30",
        "weight": "3 - 6",
        "life_span": "12 – 15 years",
        "image": "https://cdn2.thedogapi.com/images/S1RGml5Em.jpg",
        "temperaments": [
            "Clever",
            "Friendly",
            "Alert",
            "Intelligent"
        ]
    },
    {
        "name": "Leonberger",
        "id": 155,
        "height": "65 - 80",
        "weight": "54 - 77",
        "life_span": "6 - 8 years",
        "image": "https://cdn2.thedogapi.com/images/ByrmQlqVm.jpg",
        "temperaments": [
            "Obedient",
            "Fearless",
            "Loyal",
            "Companionable",
            "Adaptable",
            "Loving"
        ]
    },
    {
        "name": "Lhasa Apso",
        "id": 156,
        "height": "25 - 28",
        "weight": "5 - 8",
        "life_span": "12 - 15 years",
        "image": "https://cdn2.thedogapi.com/images/SJp7Qe5EX.jpg",
        "temperaments": [
            "Steady",
            "Fearless",
            "Friendly",
            "Devoted",
            "Assertive",
            "Spirited",
            "Energetic",
            "Lively",
            "Alert",
            "Obedient",
            "Playful",
            "Intelligent"
        ]
    },
    {
        "name": "Maltese",
        "id": 161,
        "height": "20 - 25",
        "weight": "2 - 3",
        "life_span": "15 - 18 years",
        "image": "https://cdn2.thedogapi.com/images/B1SV7gqN7.jpg",
        "temperaments": [
            "Playful",
            "Docile",
            "Fearless",
            "Affectionate",
            "Sweet-Tempered",
            "Lively",
            "Responsive",
            "Easygoing",
            "Gentle",
            "Intelligent",
            "Active"
        ]
    },
    {
        "name": "Miniature American Shepherd",
        "id": 165,
        "height": "33 - 46",
        "weight": "9 - 18",
        "life_span": "12 - 15 years",
        "image": "https://cdn2.thedogapi.com/images/BkHHQgcN7.jpg",
        "temperaments": [
            "Energetic",
            "Loyal",
            "Intelligent",
            "Trainable"
        ]
    },
    {
        "name": "Miniature Pinscher",
        "id": 167,
        "height": "25 - 32",
        "weight": "4 - 5",
        "life_span": "15 years",
        "image": "https://cdn2.thedogapi.com/images/Hy3H7g94X.jpg",
        "temperaments": [
            "Clever",
            "Outgoing",
            "Friendly",
            "Energetic",
            "Responsive",
            "Playful"
        ]
    },
    {
        "name": "Miniature Schnauzer",
        "id": 168,
        "height": "30 - 36",
        "weight": "5 - 9",
        "life_span": "12 - 14 years",
        "image": "https://cdn2.thedogapi.com/images/SJIUQl9NX.jpg",
        "temperaments": [
            "Fearless",
            "Friendly",
            "Spirited",
            "Alert",
            "Obedient",
            "Intelligent"
        ]
    },
    {
        "name": "Newfoundland",
        "id": 171,
        "height": "66 - 71",
        "weight": "45 - 68",
        "life_span": "8 - 10 years",
        "image": "https://cdn2.thedogapi.com/images/Sk4DXl54m.jpg",
        "temperaments": [
            "Sweet-Tempered",
            "Gentle",
            "Trainable"
        ]
    },
    {
        "name": "Norfolk Terrier",
        "id": 172,
        "height": "23 - 25",
        "weight": "5 - 5",
        "life_span": "12 - 15 years",
        "image": "https://cdn2.thedogapi.com/images/B1ADQg94X.jpg",
        "temperaments": [
            "Self-confidence",
            "Fearless",
            "Spirited",
            "Companionable",
            "Happy",
            "Lovable"
        ]
    },
    {
        "name": "Norwich Terrier",
        "id": 176,
        "height": "25",
        "weight": "5 - 5",
        "life_span": "12 - 15 years",
        "image": "https://cdn2.thedogapi.com/images/BkgKXlqE7.jpg",
        "temperaments": [
            "Hardy",
            "Affectionate",
            "Energetic",
            "Sensitive",
            "Intelligent"
        ]
    },
    {
        "name": "Nova Scotia Duck Tolling Retriever",
        "id": 177,
        "height": "43 - 53",
        "weight": "16 - 23",
        "life_span": "12 - 14 years",
        "image": "https://cdn2.thedogapi.com/images/SyYtQe5V7.jpg",
        "temperaments": [
            "Outgoing",
            "Alert",
            "Patient",
            "Intelligent",
            "Loving"
        ]
    },
    {
        "name": "Old English Sheepdog",
        "id": 178,
        "height": "53",
        "weight": "27 - 45",
        "life_span": "10 - 12 years",
        "image": "https://cdn2.thedogapi.com/images/HkZ57lq4m.jpg",
        "temperaments": [
            "Sociable",
            "Bubbly",
            "Playful",
            "Adaptable",
            "Intelligent",
            "Loving"
        ]
    },
    {
        "name": "Olde English Bulldogge",
        "id": 179,
        "height": "38 - 48",
        "weight": "NaN",
        "life_span": "9 – 14 years",
        "image": "https://cdn2.thedogapi.com/images/B1d5me547.jpg",
        "temperaments": [
            "Friendly",
            "Alert",
            "Confident",
            "Loving",
            "Courageous",
            "Strong"
        ]
    },
    {
        "name": "Papillon",
        "id": 181,
        "height": "20 - 28",
        "weight": "1 - 5",
        "life_span": "13 - 17 years",
        "image": "https://cdn2.thedogapi.com/images/SkJj7e547.jpg",
        "temperaments": [
            "Hardy",
            "Friendly",
            "Energetic",
            "Alert",
            "Intelligent",
            "Happy"
        ]
    },
    {
        "name": "Pekingese",
        "id": 183,
        "height": "15 - 23",
        "weight": "6",
        "life_span": "14 - 18 years",
        "image": "https://cdn2.thedogapi.com/images/ByIiml9Nm.jpg",
        "temperaments": [
            "Opinionated",
            "Good-natured",
            "Stubborn",
            "Affectionate",
            "Aggressive",
            "Intelligent"
        ]
    },
    {
        "name": "Pembroke Welsh Corgi",
        "id": 184,
        "height": "25 - 30",
        "weight": "11 - 14",
        "life_span": "12 - 14 years",
        "image": "https://cdn2.thedogapi.com/images/rJ6iQeqEm.jpg",
        "temperaments": [
            "Tenacious",
            "Outgoing",
            "Friendly",
            "Bold",
            "Playful",
            "Protective"
        ]
    },
    {
        "name": "Perro de Presa Canario",
        "id": 185,
        "height": "56 - 65",
        "weight": "40 - 50",
        "life_span": "10 - 12 years",
        "image": "https://cdn2.thedogapi.com/images/S1V3Qeq4X.jpg",
        "temperaments": [
            "Strong Willed",
            "Suspicious",
            "Gentle",
            "Dominant",
            "Calm"
        ]
    },
    {
        "name": "Pharaoh Hound",
        "id": 188,
        "height": "53 - 64",
        "weight": "18 - 27",
        "life_span": "12 - 14 years",
        "image": "https://cdn2.thedogapi.com/images/Byz6mgqEQ.jpg",
        "temperaments": [
            "Affectionate",
            "Sociable",
            "Playful",
            "Intelligent",
            "Active",
            "Trainable"
        ]
    },
    {
        "name": "Plott",
        "id": 189,
        "height": "51 - 64",
        "weight": "18 - 27",
        "life_span": "12 - 14 years",
        "image": "https://cdn2.thedogapi.com/images/B1i67l5VQ.jpg",
        "temperaments": [
            "Bold",
            "Alert",
            "Loyal",
            "Intelligent"
        ]
    },
    {
        "name": "Pomeranian",
        "id": 193,
        "height": "20 - 30",
        "weight": "1 - 3",
        "life_span": "15 years",
        "image": "https://cdn2.thedogapi.com/images/HJd0XecNX.jpg",
        "temperaments": [
            "Extroverted",
            "Friendly",
            "Sociable",
            "Playful",
            "Intelligent",
            "Active"
        ]
    },
    {
        "name": "Poodle (Miniature)",
        "id": 196,
        "height": "28 - 38",
        "weight": "7 - 8",
        "life_span": "12 – 15 years",
        "image": "https://cdn2.thedogapi.com/images/Hkxk4ecVX.jpg"
    },
    {
        "name": "Poodle (Toy)",
        "id": 197,
        "height": "23 - 28",
        "weight": "3 - 4",
        "life_span": "18 years",
        "image": "https://cdn2.thedogapi.com/images/rJFJVxc4m.jpg"
    },
    {
        "name": "Pug",
        "id": 201,
        "height": "25 - 30",
        "weight": "6 - 8",
        "life_span": "12 - 14 years",
        "image": "https://cdn2.thedogapi.com/images/HyJvcl9N7.jpg",
        "temperaments": [
            "Docile",
            "Clever",
            "Charming",
            "Stubborn",
            "Sociable",
            "Playful",
            "Quiet",
            "Attentive"
        ]
    },
    {
        "name": "Puli",
        "id": 204,
        "height": "41 - 43",
        "weight": "11 - 16",
        "life_span": "12 - 16 Years years",
        "image": "https://cdn2.thedogapi.com/images/ryPgVl5N7.jpg",
        "temperaments": [
            "Energetic",
            "Agile",
            "Loyal",
            "Obedient",
            "Intelligent",
            "Faithful"
        ]
    },
    {
        "name": "Pumi",
        "id": 205,
        "height": "38 - 47",
        "weight": "8 - 15",
        "life_span": "13 - 15 years",
        "image": "https://cdn2.thedogapi.com/images/SyRe4xcN7.jpg",
        "temperaments": [
            "Lively",
            "Reserved",
            "Intelligent",
            "Active",
            "Protective",
            "Vocal"
        ]
    },
    {
        "name": "Rat Terrier",
        "id": 207,
        "height": "25 - 33",
        "weight": "4 - 11",
        "life_span": "12 - 18 years",
        "image": "https://cdn2.thedogapi.com/images/HkXWNl9E7.jpg",
        "temperaments": [
            "Affectionate",
            "Lively",
            "Inquisitive",
            "Alert",
            "Intelligent",
            "Loving"
        ]
    },
    {
        "name": "Redbone Coonhound",
        "id": 208,
        "height": "53 - 69",
        "weight": "20 - 36",
        "life_span": "10 - 12 years",
        "image": "https://cdn2.thedogapi.com/images/HJMzEl5N7.jpg",
        "temperaments": [
            "Affectionate",
            "Energetic",
            "Independent",
            "Companionable",
            "Familial",
            "Unflappable"
        ]
    },
    {
        "name": "Rhodesian Ridgeback",
        "id": 209,
        "height": "61 - 69",
        "weight": "34 - 36",
        "life_span": "10 - 12 years",
        "image": "https://cdn2.thedogapi.com/images/By9zNgqE7.jpg",
        "temperaments": [
            "Strong Willed",
            "Mischievous",
            "Loyal",
            "Dignified",
            "Sensitive",
            "Intelligent"
        ]
    },
    {
        "name": "Rottweiler",
        "id": 210,
        "height": "56 - 69",
        "weight": "34 - 50",
        "life_span": "8 - 10 years",
        "image": "https://cdn2.thedogapi.com/images/r1xXEgcNX.jpg",
        "temperaments": [
            "Steady",
            "Good-natured",
            "Fearless",
            "Devoted",
            "Alert",
            "Obedient",
            "Confident",
            "Self-assured",
            "Calm",
            "Courageous"
        ]
    },
    {
        "name": "Russian Toy",
        "id": 211,
        "height": "19 - 27",
        "weight": "1 - 3",
        "life_span": "10 - 12 years",
        "image": "https://cdn2.thedogapi.com/images/HkP7Vxc4Q.jpg"
    },
    {
        "name": "Saint Bernard",
        "id": 212,
        "height": "65 - 70",
        "weight": "59 - 82",
        "life_span": "7 - 10 years",
        "image": "https://cdn2.thedogapi.com/images/_Qf9nfRzL.png",
        "temperaments": [
            "Friendly",
            "Lively",
            "Gentle",
            "Watchful",
            "Calm"
        ]
    },
    {
        "name": "Saluki",
        "id": 213,
        "height": "58 - 71",
        "weight": "16 - 29",
        "life_span": "12 - 14 years",
        "image": "https://cdn2.thedogapi.com/images/fjFIuehNo.jpg",
        "temperaments": [
            "Aloof",
            "Reserved",
            "Intelligent",
            "Quiet"
        ]
    },
    {
        "name": "Samoyed",
        "id": 214,
        "height": "48 - 60",
        "weight": "23 - 27",
        "life_span": "12 - 14 years",
        "image": "https://cdn2.thedogapi.com/images/S1T8Ee9Nm.jpg",
        "temperaments": [
            "Stubborn",
            "Friendly",
            "Sociable",
            "Lively",
            "Alert",
            "Playful"
        ]
    },
    {
        "name": "Schipperke",
        "id": 216,
        "height": "25 - 33",
        "weight": "5 - 7",
        "life_span": "13 - 15 years",
        "image": "https://cdn2.thedogapi.com/images/SyBvVgc47.jpg",
        "temperaments": [
            "Fearless",
            "Agile",
            "Curious",
            "Independent",
            "Confident",
            "Faithful"
        ]
    },
    {
        "name": "Scottish Deerhound",
        "id": 218,
        "height": "71 - 81",
        "weight": "32 - 59",
        "life_span": "8 - 10 years",
        "image": "https://cdn2.thedogapi.com/images/SkNjqx9NQ.jpg",
        "temperaments": [
            "Docile",
            "Friendly",
            "Dignified",
            "Gentle"
        ]
    },
    {
        "name": "Scottish Terrier",
        "id": 219,
        "height": "25",
        "weight": "8 - 10",
        "life_span": "11 - 13 years",
        "image": "https://cdn2.thedogapi.com/images/Bklnce5NX.jpg",
        "temperaments": [
            "Feisty",
            "Alert",
            "Independent",
            "Playful",
            "Quick",
            "Self-assured"
        ]
    },
    {
        "name": "Shetland Sheepdog",
        "id": 221,
        "height": "33 - 41",
        "weight": "14",
        "life_span": "12 - 14 years",
        "image": "https://cdn2.thedogapi.com/images/rJa29l9E7.jpg",
        "temperaments": [
            "Affectionate",
            "Lively",
            "Responsive",
            "Alert",
            "Loyal",
            "Reserved",
            "Playful",
            "Gentle",
            "Intelligent",
            "Active",
            "Trainable",
            "Strong"
        ]
    },
    {
        "name": "Shiba Inu",
        "id": 222,
        "height": "34 - 42",
        "weight": "8 - 10",
        "life_span": "12 - 16 years",
        "image": "https://cdn2.thedogapi.com/images/Zn3IjPX3f.jpg",
        "temperaments": [
            "Charming",
            "Fearless",
            "Keen",
            "Alert",
            "Confident",
            "Faithful"
        ]
    },
    {
        "name": "Shih Tzu",
        "id": 223,
        "height": "20 - 28",
        "weight": "4 - 7",
        "life_span": "10 - 18 years",
        "image": "https://cdn2.thedogapi.com/images/BkrJjgcV7.jpg",
        "temperaments": [
            "Clever",
            "Spunky",
            "Outgoing",
            "Friendly",
            "Affectionate",
            "Lively",
            "Alert",
            "Loyal",
            "Independent",
            "Playful",
            "Gentle",
            "Intelligent",
            "Happy",
            "Active",
            "Courageous"
        ]
    },
    {
        "name": "Shiloh Shepherd",
        "id": 225,
        "height": "66 - 76",
        "weight": "54 - 64",
        "life_span": "9 – 14 years",
        "image": "https://cdn2.thedogapi.com/images/SJJxjecEX.jpg",
        "temperaments": [
            "Outgoing",
            "Loyal",
            "Companionable",
            "Gentle",
            "Loving",
            "Trainable"
        ]
    },
    {
        "name": "Siberian Husky",
        "id": 226,
        "height": "51 - 60",
        "weight": "16 - 27",
        "life_span": "12 years",
        "image": "https://cdn2.thedogapi.com/images/S17ZilqNm.jpg",
        "temperaments": [
            "Outgoing",
            "Friendly",
            "Alert",
            "Gentle",
            "Intelligent"
        ]
    },
    {
        "name": "Silky Terrier",
        "id": 228,
        "height": "23 - 25",
        "weight": "4 - 5",
        "life_span": "12 - 15 years",
        "image": "https://cdn2.thedogapi.com/images/ByzGsl5Nm.jpg",
        "temperaments": [
            "Friendly",
            "Responsive",
            "Inquisitive",
            "Alert",
            "Quick",
            "Joyful"
        ]
    },
    {
        "name": "Smooth Fox Terrier",
        "id": 232,
        "height": "39",
        "weight": "NaN - 8",
        "life_span": "12 - 14 years",
        "image": "https://cdn2.thedogapi.com/images/Syszjx9Em.jpg",
        "temperaments": [
            "Fearless",
            "Affectionate",
            "Alert",
            "Playful",
            "Intelligent",
            "Active"
        ]
    },
    {
        "name": "Soft Coated Wheaten Terrier",
        "id": 233,
        "height": "41 - 46",
        "weight": "14 - 18",
        "life_span": "12 - 15 years",
        "image": "https://cdn2.thedogapi.com/images/HJHmix5NQ.jpg",
        "temperaments": [
            "Affectionate",
            "Spirited",
            "Energetic",
            "Playful",
            "Intelligent",
            "Faithful"
        ]
    },
    {
        "name": "Spanish Water Dog",
        "id": 235,
        "height": "41 - 51",
        "weight": "14 - 23",
        "life_span": "12 - 15 years",
        "image": "https://cdn2.thedogapi.com/images/HJf4jl9VX.jpg",
        "temperaments": [
            "Trainable",
            "Diligent",
            "Affectionate",
            "Loyal",
            "Athletic",
            "Intelligent"
        ]
    },
    {
        "name": "Spinone Italiano",
        "id": 236,
        "height": "57 - 70",
        "weight": "28 - 39",
        "life_span": "10 - 12 years",
        "image": "https://cdn2.thedogapi.com/images/rk5Eoe5Nm.jpg",
        "temperaments": [
            "Docile",
            "Friendly",
            "Affectionate",
            "Loyal",
            "Patient",
            "Gentle"
        ]
    },
    {
        "name": "Staffordshire Bull Terrier",
        "id": 238,
        "height": "36 - 41",
        "weight": "11 - 17",
        "life_span": "12 - 14 years",
        "image": "https://cdn2.thedogapi.com/images/H1zSie9V7.jpg",
        "temperaments": [
            "Reliable",
            "Fearless",
            "Bold",
            "Affectionate",
            "Loyal",
            "Intelligent",
            "Courageous"
        ]
    },
    {
        "name": "Standard Schnauzer",
        "id": 239,
        "height": "44 - 50",
        "weight": "14 - 23",
        "life_span": "13 - 15 years",
        "image": "https://cdn2.thedogapi.com/images/tmzeu6ID_.jpg",
        "temperaments": [
            "Trainable",
            "Good-natured",
            "Devoted",
            "Lively",
            "Playful",
            "Intelligent"
        ]
    },
    {
        "name": "Swedish Vallhund",
        "id": 242,
        "height": "29 - 34",
        "weight": "9 - 14",
        "life_span": "12 - 14 years",
        "image": "https://cdn2.thedogapi.com/images/HJ-Dix94Q.jpg",
        "temperaments": [
            "Fearless",
            "Friendly",
            "Energetic",
            "Alert",
            "Intelligent",
            "Watchful"
        ]
    },
    {
        "name": "Thai Ridgeback",
        "id": 243,
        "height": "51 - 61",
        "weight": "16 - 25",
        "life_span": "10 - 12 years",
        "image": "https://cdn2.thedogapi.com/images/zv89hR-O8.jpg",
        "temperaments": [
            "Protective",
            "Loyal",
            "Independent",
            "Intelligent",
            "Loving",
            "Familial"
        ]
    },
    {
        "name": "Tibetan Mastiff",
        "id": 244,
        "height": "61 - 66",
        "weight": "39 - 64",
        "life_span": "10 - 14 years",
        "image": "https://cdn2.thedogapi.com/images/SkM9sec47.jpg",
        "temperaments": [
            "Strong Willed",
            "Tenacious",
            "Aloof",
            "Stubborn",
            "Intelligent",
            "Protective"
        ]
    },
    {
        "name": "Tibetan Spaniel",
        "id": 245,
        "height": "25",
        "weight": "4 - 7",
        "life_span": "12 - 15 years",
        "image": "https://cdn2.thedogapi.com/images/Hyjcol947.jpg",
        "temperaments": [
            "Willful",
            "Aloof",
            "Assertive",
            "Independent",
            "Playful",
            "Intelligent",
            "Happy"
        ]
    },
    {
        "name": "Tibetan Terrier",
        "id": 246,
        "height": "36 - 43",
        "weight": "9 - 11",
        "life_span": "12 - 15 years",
        "image": "https://cdn2.thedogapi.com/images/6f5n_42mB.jpg",
        "temperaments": [
            "Affectionate",
            "Energetic",
            "Amiable",
            "Reserved",
            "Gentle",
            "Sensitive"
        ]
    },
    {
        "name": "Toy Fox Terrier",
        "id": 248,
        "height": "20 - 28",
        "weight": "2 - 4",
        "life_span": "12 - 15 years",
        "image": "https://cdn2.thedogapi.com/images/B17ase9V7.jpg",
        "temperaments": [
            "Friendly",
            "Spirited",
            "Alert",
            "Loyal",
            "Playful",
            "Intelligent"
        ]
    },
    {
        "name": "Treeing Walker Coonhound",
        "id": 250,
        "height": "51 - 69",
        "weight": "20 - 36",
        "life_span": "10 - 13 years",
        "image": "https://cdn2.thedogapi.com/images/SkRpsgc47.jpg",
        "temperaments": [
            "Clever",
            "Affectionate",
            "Confident",
            "Intelligent",
            "Loving",
            "Trainable"
        ]
    },
    {
        "name": "Vizsla",
        "id": 251,
        "height": "53 - 61",
        "weight": "23 - 29",
        "life_span": "10 - 14 years",
        "image": "https://cdn2.thedogapi.com/images/r1o0jx9Em.jpg",
        "temperaments": [
            "Affectionate",
            "Energetic",
            "Loyal",
            "Gentle",
            "Quiet"
        ]
    },
    {
        "name": "Weimaraner",
        "id": 253,
        "height": "58 - 69",
        "weight": "25 - 41",
        "life_span": "12 - 15 years",
        "image": "https://cdn2.thedogapi.com/images/SyU12l9V7.jpg",
        "temperaments": [
            "Steady",
            "Aloof",
            "Stubborn",
            "Energetic",
            "Alert",
            "Intelligent",
            "Powerful",
            "Fast"
        ]
    },
    {
        "name": "Welsh Springer Spaniel",
        "id": 254,
        "height": "43 - 48",
        "weight": "16 - 25",
        "life_span": "12 - 15 years",
        "image": "https://cdn2.thedogapi.com/images/BJ1gnx5Vm.jpg",
        "temperaments": [
            "Stubborn",
            "Friendly",
            "Affectionate",
            "Loyal",
            "Playful",
            "Active"
        ]
    },
    {
        "name": "West Highland White Terrier",
        "id": 256,
        "height": "25 - 28",
        "weight": "7 - 10",
        "life_span": "15 - 20 years",
        "image": "https://cdn2.thedogapi.com/images/Bkdx2g5Em.jpg",
        "temperaments": [
            "Hardy",
            "Friendly",
            "Alert",
            "Independent",
            "Gay",
            "Active",
            "Courageous"
        ]
    },
    {
        "name": "Whippet",
        "id": 257,
        "height": "46 - 56",
        "weight": "11 - 16",
        "life_span": "12 - 15 years",
        "image": "https://cdn2.thedogapi.com/images/Hyv-ne94m.jpg",
        "temperaments": [
            "Friendly",
            "Affectionate",
            "Lively",
            "Gentle",
            "Intelligent",
            "Quiet"
        ]
    },
    {
        "name": "White Shepherd",
        "id": 258,
        "height": "56 - 64",
        "weight": "27 - 39",
        "life_span": "12 – 14 years",
        "image": "https://cdn2.thedogapi.com/images/r14M3e9E7.jpg",
        "temperaments": [
            "Self-confidence",
            "Aloof",
            "Fearless",
            "Alert",
            "Companionable",
            "Eager"
        ]
    },
    {
        "name": "Wire Fox Terrier",
        "id": 259,
        "height": "33 - 41",
        "weight": "7 - 9",
        "life_span": "13 – 14 years",
        "image": "https://cdn2.thedogapi.com/images/SJ6f2g9EQ.jpg",
        "temperaments": [
            "Fearless",
            "Friendly",
            "Bold",
            "Keen",
            "Alert",
            "Quick"
        ]
    },
    {
        "name": "Wirehaired Pointing Griffon",
        "id": 260,
        "height": "51 - 61",
        "weight": "20 - 32",
        "life_span": "12 - 14 years",
        "image": "https://cdn2.thedogapi.com/images/Bkam2l9Vm.jpg",
        "temperaments": [
            "Loyal",
            "Gentle",
            "Vigilant",
            "Trainable",
            "Proud"
        ]
    },
    {
        "name": "Wirehaired Vizsla",
        "id": 261,
        "height": "55 - 64",
        "weight": "20 - 29",
        "life_span": "12 - 14 years",
        "image": "https://cdn2.thedogapi.com/images/r1I4hl5Em.jpg"
    },
    {
        "name": "Xoloitzcuintli",
        "id": 262,
        "height": "25 - 58",
        "weight": "4 - 14",
        "life_span": "12 - 14 years",
        "image": "https://cdn2.thedogapi.com/images/HkNS3gqEm.jpg",
        "temperaments": [
            "Cheerful",
            "Alert",
            "Companionable",
            "Intelligent",
            "Protective",
            "Calm"
        ]
    },
    {
        "name": "Yorkshire Terrier",
        "id": 264,
        "height": "20 - 23",
        "weight": "2 - 3",
        "life_span": "12 - 16 years",
        "image": "https://cdn2.thedogapi.com/images/B12BnxcVQ.jpg",
        "temperaments": [
            "Bold",
            "Independent",
            "Confident",
            "Intelligent",
            "Courageous"
        ]
    }
]

let weight = temp.map(e => e.weight)
let weight2 = weight.map(e => e.replace('-', ','))
// extract every position and push it as an string into an array
let weight3 = weight2.map(e => e.split(','))
// convert the array of strings into an array of numbers
let weight4 = weight3.map(e => e.map(Number))
// extract the numbers of each array and push them into an array
let weight5 = weight4.map(e => e.map(e => e))
// convert the array of arrays into an array of numbers
let weight6 = weight5.map(e => e.reduce((a, b) => a + b))
// pop the NaN from the array
let weight7 = weight6.filter(e => !isNaN(e))
// sort the array
let weight8 = weight7.sort((a, b) => a - b)