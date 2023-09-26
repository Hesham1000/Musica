const express = require('express');
// const {createSingerValidator, getSingerValidator, updateSingerValidator, deleteSingerValidator} = require('../utils/validators/singerValidator');


const {getRegistersData, createRegister} = require('../controllers/registerDB');

const api = express.Router();




api.route('/').get(getRegistersData).post(createRegister);
// api.route('/:id').get(getSingerValidator, getSingerById).put(updateSingerValidator, updateSingerById).delete(deleteSingerValidator, deleteSingerById);
module.exports = api;