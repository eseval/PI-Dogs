require('dotenv').config();
const { key } = process.env;
const { Router } = require('express');
const router = Router();
const { Dog, Temperament } = require('../db')
const axios = require('axios');
const { Op } = require('sequelize');

const getApiInfo = async () => {
    const apiUrl = await axios(`https://api.thedogapi.com/v1/breeds?api_key=${key}`)
    const apiInfo = await apiUrl.data.map(e => {
        return {
            name: e.name,
            id: e.id,
            height: e.height.metric,
            weight: e.weight.metric,
            life_span: e.life_span,
            image: e.image.url,
            //convert temperament to array of strings
            temperaments: e.temperament?.split(', ')
        }
    })
    return apiInfo
}

const getDbInfo = async () => {
    const dbInfo = await Dog.findAll({
        include: [{
            model: Temperament,
            attributes: ['name'],
            through: {
                attributes: [],
            }
        }],
        // attributes: ['name', 'id', 'height', 'weight', 'life_span', 'image']
    })
    return dbInfo
}

const getAllDogs = async () => {
    try {
        const apiInfo = await getApiInfo()
        const dbInfo = await getDbInfo()
        const infoTotal = apiInfo.concat(dbInfo)
        return infoTotal
    }
    catch (error) {
        console.log(error)
    }
}

router.get('/', async (req, res) => {
    const name = req.query.name
    const dogs = await getAllDogs()
        if (name) {
            const dogsName = await dogs.filter(e => e.name.toLowerCase().includes(name.toLowerCase()))
            dogsName.length ?
                res.status(200).send(dogsName) :
                res.status(404).send('Could not find any dog with that name')
        }
        else {
            res.status(200).send(dogs)
        }
})

router.get('/:id', async (req, res, next) => {
    const id = req.params.id
    const dogsTotal = await getAllDogs()
    console.log('id: ' + id);
    try {
        if(!id.includes('-')) {
            const filterDetails = await dogsTotal.filter(e => e.id === Number(id))
            console.log('filterDetails: ' + filterDetails);
            filterDetails.length ?
                res.status(200).send(filterDetails) :
                res.status(404).send('Could not find any dog with that id')
        }
        else {
            let bdDetails = await Dog.findByPk(id)
            console.log('bdDetails: ' + bdDetails);
            bdDetails.length ?
                res.status(200).send(bdDetails) :
                res.status(404).send('Could not find any dog with that id')
        }
        //     console.log('bdDetails: ' + bdDetails);
        //     const temperaments = await bdDetails.getTemperaments()
        //     const temps = temperaments.map(e => e.dataValues.name)
        //     bdDetails.length ?
        //         res.status(200).send({...bdDetails.dataValues, temperaments: temps}) :
        //         res.status(404).send('Could not find any dog with that id')
        // }
    }
    catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    const { name, height, weight, life_span, image, temperaments } = req.body
    console.log(temperaments);
    try {
        const dogsCreated = await Dog.create({ name, height, weight, life_span, image })
        // const tempsDb = await Temperament.findAll({
        //     where: {
        //         name: temperaments
        //     }
        // })
        // const dog = await Dog.FindOne({where: {name: name}})
        const tempsDB = temperaments.map(async e => await dogsCreated.addTemperament(e))
        // dogsCreated.addTemperament(tempsDb)
        res.send('Dog created successfully')
        }
    catch (error) {
        next(error)
    }
})

module.exports = router
