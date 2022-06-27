const { key } = process.env;
const { Router } = require('express');
const router = Router();
const { Temperament } = require('../db');
const axios = require('axios');

const url = `https://api.thedogapi.com/v1/breeds?api_key=${key}`


router.get('/', async (req, res, next) => {
    const tempApi = await axios.get(url);
    try {
    const temperaments = tempApi.data.map(e => e.temperament).map(e => e?.split(', '));
    console.log(temperaments)
    let uniqueTemperaments = [...new Set(temperaments.flat())];
    // console.log(uniqueTemperaments)
        uniqueTemperaments.forEach(async e => {
            if(e) {
            await Temperament.findOrCreate({
                where: {
                    name: e}
            })
        }
        });
    uniqueTemperaments = await Temperament.findAll()
    // console.log(uniqueTemperaments)
    // let finalTemps = uniqueTemperaments.map(e => e.dataValues.name)
    // console.log(finalTemps)
    res.send(uniqueTemperaments)
    }
    catch (err) {
        next(err);
    }
})
module.exports = router
