// // // [
// // //     {
// // //             "id": 3498,
// // //             "name": "Grand Theft Auto V",
// // //             "image": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
// // //             "rating": 4.47,
// // //             "platforms": [
// // //                 "PC",
// // //                 "Xbox Series S/X",
// // //                 "PlayStation 4",
// // //                 "PlayStation 3",
// // //                 "Xbox 360",
// // //                 "Xbox One",
// // //                 "PlayStation 5"
// // //             ],
// // //             "genres": [
// // //                 "Action",
// // //                 "Adventure"
// // //             ],
// // //             "created": false
// // //         },
// // // ]

// // // [
// // //     {
// // //         "id": 1,
// // //         "name": "Action"
// // //     },
// // //     {
// // //         "id": 2,
// // //         "name": "Indie"
// // //     },
// // //     {
// // //         "id": 3,
// // //         "name": "RPG"
// // //     },
// // //     {
// // //         "id": 4,
// // //         "name": "Adventure"
// // //     },
// // //     {
// // //         "id": 5,
// // //         "name": "Strategy"
// // //     },
// // //     {
// // //         "id": 6,
// // //         "name": "Shooter"
// // //     },
// // //     {
// // //         "id": 7,
// // //         "name": "Casual"
// // //     },
// // //     {
// // //         "id": 8,
// // //         "name": "Simulation"
// // //     },
// // //     {
// // //         "id": 9,
// // //         "name": "Puzzle"
// // //     },
// // //     {
// // //         "id": 10,
// // //         "name": "Racing"
// // //     },
// // //     {
// // //         "id": 11,
// // //         "name": "Arcade"
// // //     },
// // //     {
// // //         "id": 12,
// // //         "name": "Platformer"
// // //     },
// // //     {
// // //         "id": 13,
// // //         "name": "Sports"
// // //     },
// // //     {
// // //         "id": 14,
// // //         "name": "Massively Multiplayer"
// // //     },
// // //     {
// // //         "id": 15,
// // //         "name": "Fighting"
// // //     },
// // //     {
// // //         "id": 16,
// // //         "name": "Family"
// // //     },
// // //     {
// // //         "id": 17,
// // //         "name": "Board Games"
// // //     },
// // //     {
// // //         "id": 18,
// // //         "name": "Educational"
// // //     },
// // //     {
// // //         "id": 19,
// // //         "name": "Card"
// // //     }
// // // ]


// // [
// //     {
// //         "name": "Affenpinscher",
// //         "id": 1,
// //         "height": "23 - 29",
// //         "weight": "3 - 6",
// //         "life_span": "10 - 12 years",
// //         "image": "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg",
// //         "temperament": "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving"
// //     }
// // ]

// // // convert temperament to array of strings

// //Create a paginate with previous and next links
// // const paginate = (req, res, next) => {
// //     const page = parseInt(req.query.page) || 1;
// //     const limit = parseInt(req.query.limit) || 10;
// //     const startIndex = (page - 1) * limit;
// //     const endIndex = page * limit;
// //     const results = {};
// //     if (endIndex < res.total) {
// //         results.next = {
// //             page: page + 1,
// //             limit: limit
// //         };
// //     }
// //     if (startIndex > 0) {
// //         results.previous = {
// //             page: page - 1,
// //             limit: limit
// //         };
// //     }
// //     res.pagination = results;
// //     next();
// // }


// const pageNumbers = [];
//     for (let i = 1; i <= Math.ceil(allDogs.length / dogsPerPage); i++) {
//         pageNumbers.push(i);
//     }
//     return (
//         <nav>
//             {pageNumbers && pageNumbers.map((number) => (
//                 <div key={number}>
//                     <button onClick={() => paginado(number)}>{number}</button>
//                 </div>
//             ))}
//         </nav>
//     )
