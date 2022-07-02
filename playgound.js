// // // // [
// // // //     {
// // // //             "id": 3498,
// // // //             "name": "Grand Theft Auto V",
// // // //             "image": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
// // // //             "rating": 4.47,
// // // //             "platforms": [
// // // //                 "PC",
// // // //                 "Xbox Series S/X",
// // // //                 "PlayStation 4",
// // // //                 "PlayStation 3",
// // // //                 "Xbox 360",
// // // //                 "Xbox One",
// // // //                 "PlayStation 5"
// // // //             ],
// // // //             "genres": [
// // // //                 "Action",
// // // //                 "Adventure"
// // // //             ],
// // // //             "created": false
// // // //         },
// // // // ]

// // // // [
// // // //     {
// // // //         "id": 1,
// // // //         "name": "Action"
// // // //     },
// // // //     {
// // // //         "id": 2,
// // // //         "name": "Indie"
// // // //     },
// // // //     {
// // // //         "id": 3,
// // // //         "name": "RPG"
// // // //     },
// // // //     {
// // // //         "id": 4,
// // // //         "name": "Adventure"
// // // //     },
// // // //     {
// // // //         "id": 5,
// // // //         "name": "Strategy"
// // // //     },
// // // //     {
// // // //         "id": 6,
// // // //         "name": "Shooter"
// // // //     },
// // // //     {
// // // //         "id": 7,
// // // //         "name": "Casual"
// // // //     },
// // // //     {
// // // //         "id": 8,
// // // //         "name": "Simulation"
// // // //     },
// // // //     {
// // // //         "id": 9,
// // // //         "name": "Puzzle"
// // // //     },
// // // //     {
// // // //         "id": 10,
// // // //         "name": "Racing"
// // // //     },
// // // //     {
// // // //         "id": 11,
// // // //         "name": "Arcade"
// // // //     },
// // // //     {
// // // //         "id": 12,
// // // //         "name": "Platformer"
// // // //     },
// // // //     {
// // // //         "id": 13,
// // // //         "name": "Sports"
// // // //     },
// // // //     {
// // // //         "id": 14,
// // // //         "name": "Massively Multiplayer"
// // // //     },
// // // //     {
// // // //         "id": 15,
// // // //         "name": "Fighting"
// // // //     },
// // // //     {
// // // //         "id": 16,
// // // //         "name": "Family"
// // // //     },
// // // //     {
// // // //         "id": 17,
// // // //         "name": "Board Games"
// // // //     },
// // // //     {
// // // //         "id": 18,
// // // //         "name": "Educational"
// // // //     },
// // // //     {
// // // //         "id": 19,
// // // //         "name": "Card"
// // // //     }
// // // // ]


// // // [
// // //     {
// // //         "name": "Affenpinscher",
// // //         "id": 1,
// // //         "height": "23 - 29",
// // //         "weight": "3 - 6",
// // //         "life_span": "10 - 12 years",
// // //         "image": "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg",
// // //         "temperament": "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving"
// // //     }
// // // ]

// // // // convert temperament to array of strings

// // //Create a paginate with previous and next links
// // // const paginate = (req, res, next) => {
// // //     const page = parseInt(req.query.page) || 1;
// // //     const limit = parseInt(req.query.limit) || 10;
// // //     const startIndex = (page - 1) * limit;
// // //     const endIndex = page * limit;
// // //     const results = {};
// // //     if (endIndex < res.total) {
// // //         results.next = {
// // //             page: page + 1,
// // //             limit: limit
// // //         };
// // //     }
// // //     if (startIndex > 0) {
// // //         results.previous = {
// // //             page: page - 1,
// // //             limit: limit
// // //         };
// // //     }
// // //     res.pagination = results;
// // //     next();
// // // }


// // const pageNumbers = [];
// //     for (let i = 1; i <= Math.ceil(allDogs.length / dogsPerPage); i++) {
// //         pageNumbers.push(i);
// //     }
// //     return (
// //         <nav>
// //             {pageNumbers && pageNumbers.map((number) => (
// //                 <div key={number}>
// //                     <button onClick={() => paginado(number)}>{number}</button>
// //                 </div>
// //             ))}
// //         </nav>
// //     )

// // case 'ORDER_BY_NAME':
// //             let allDg = [...state.dogs]
// //             allDg = allDg.sort((a,b) => {
// //                 if(a.name.toLowerCase() < b.name.toLowerCase()){
// //                     return action.payload === 'Asc' ? -1 : 1
// //             }
// //             if(a.name.toLowerCase() > b.name.toLowerCase()){
// //                 return action.payload === 'Desc' ? -1 : 1
// //             }
// //             else{
// //                 return 0
// //             }
// //             })
// //             return {
// //                 ...state,
// //                 dogs: action.payload === 'All' ? state.allDogs : allDg,
// //             }

// // case 'ORDER_BY_CREATION':
// //             let filter
// //             if(state.filters.length === 0){
// //                 let allDogsCreated = [...state.allDogs]
// //                 filter = action.payload === 'api' ? allDogsCreated.filter(e=> !isNaN(e.id) === true) : allDogsCreated.filter(e => e.created === true)
// //                 return {
// //                     ...state,
// //                     dogs: action.payload === 'all' ? allDogsCreated : filter
// //                 }
// //             } else if(state.filters.length > 0){
// //                 let allDogsCreated = [...state.filters]
// //                 filter = action.payload === 'api' ? allDogsCreated.filter(e => e.created === false) : allDogsCreated.filter(e => e.created === true)
// //                 return {
// //                     ...state,
// //                     dogs: action.payload === 'all' ? allDogsCreated : filter
// //                 }
// //             } return

/*-----------------------Paginado Carlos----------------------------

//vayamos con el Paginado,
   //nos basaremos en la alternativa de Piotr Beredecki, haremos uso del estado

//Paso 1, ordenando a las razas
const [currentPage, setCurrentPage] = useState(1);

let dogsPerPage=8;
function handleClick(event) {// necesitamos una funcion para ir alterando las cosas
    setCurrentPage(
    currentPage => Number(event.target.id)
    )

};
//necesitamos que unos pocos elementos aparezcan de todas las razas
let indiceFinal = currentPage * dogsPerPage;
let indiceInicial = indiceFinal - dogsPerPage;
let message;
if (typeof razas === 'string'){ message =razas}
let razasActuales = typeof razas !== 'string' && razas?.sort(sortMethods[sortState].method).filter(filtMethods[filt].method).slice(indiceInicial, indiceFinal);
let longitud = typeof razas !== 'string' && razas?.sort(sortMethods[sortState].method).filter(filtMethods[filt].method).length
// el slice es para que aprezcan los objetitos que yo deseo
// el indiceFinal es para que muestren hasta cierto elemento(el cual es la cantidad de paginas por perros en ese instante) 
// el indice inicial es necesario, pues asi nos aseguramos que se muestren la cantidad de razas (8) en esta pagina
let razasRenderizadas =typeof razas !== 'string' && razasActuales?.map(can => <DogHome
    id={can.id}
    key={can.id}
    name={can.name}
    weight={can.weight}
    temps={can.temp}
    image={can.image}
    Temperaments={can.Temperaments}
    origin={can.origin}
    />);// aqui ya vamos a mapear cada elemento, DogHome para todos


/// Paso 2, Mostremos las paginas y el numero de cada una de ellas
let pageNumbers = [];
for (let i = 1; i <= Math.ceil(longitud/ dogsPerPage); i++) {
    pageNumbers.push(i);
}// el ceil es para aproximar por exceso, asi nos aseguramos de no excluir razas
// cuando su cantidad sea distinta de 0 modulo 8( cuando no sea divisible)
let numerosRenderizados = pageNumbers.map(number => {
    return (//Pues aqui mostramos los numeros. Deberiamos usar botones
    <button
        key={number}
        id={number}
        onClick={handleClick}
        className={ number%2 ===0? 'par': 'impar'}
    >
        {number}
    </button>
    );
});
//Paso 3... si bien la paginacion funciona, no es comodo para el usuario
// ver tantos botones de paginas. Optimizaremos esto con botones de Prev y Next
// usando Academind como referencia


const[paginado, setPaginado] = React.useState(0);

let pageLimit =10;/// porque si, vamos de 10 en 10
//Definamos dos funciones mas, prev y next
function prevPage(){
setCurrentPage(
    currentPage =>{
    if(currentPage>1){
        return currentPage-1;
    } return 1;

    }
);
setPaginado( paginado =>{if (currentPage>1){
return Math.floor((currentPage-2) / pageLimit)
} return 0;
}
)

};
function nextPage(){
setCurrentPage(
    currentPage =>{if(currentPage<pageNumbers.length){
    return currentPage+1
    }
    return pageNumbers.length;
    }
)
setPaginado( paginado => Math.floor((currentPage) / pageLimit))
};
//Ademas, necesitamos algo para mostrar solamente los puntos (botones deseados)
// que representan nuestras paginas de razas
//Hagamos el slice de los puntos (es que de lo contrario estaria pegando nomas)
let sliceOfnumerosRederizados= numerosRenderizados.slice((pageLimit*paginado),(pageLimit*(paginado+1)));
//paso 4, renderizar los botones correspondientes.. y ya seria todo


-----------------------Paginado Carlos----------------------------*/



// -------------------------------------------------------------------------REDUCER

/*
const allDogsTemps = [...state.dogs]
            console.log(allDogsTemps)
            const filterTemps = action.payload
            let arr = []
            if(filterTemps){
                allDogsTemps.forEach(dog => {
                    if(dog.temperaments && typeof dog.temperaments === 'string'){
                        if(dog.temperaments.includes(action.payload)) arr.push(dog)
                        console.log(dog.temperaments)
                    } else if(dog.temperaments && typeof dog.temperaments !== 'string'){
                        dog.temperaments.map(e => {
                            if(e.name.includes(action.payload)) arr.push(dog)
                        })
                    }
                })
            }

// -------------------------------------------------------------------------REDUCER
*/
