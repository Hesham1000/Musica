const express = require('express');
const {createSingerValidator, getSingerValidator, updateSingerValidator, deleteSingerValidator} = require('../utils/validators/singerValidator');

const songsBelong = require('./songCardAPI');

const {getSingersData, createSinger, getSingerById, updateSingerById, deleteSingerById} = require('../controllers/singerCardDB');

const api = express.Router();

// const uploadImage = require('../middlewares/imagesUpload');

api.use('/:singerId/songs', songsBelong);


api.route('/').get(getSingersData).post(createSingerValidator, createSinger);
api.route('/:id').get(getSingerValidator, getSingerById).put(updateSingerValidator, updateSingerById).delete(deleteSingerValidator, deleteSingerById);

module.exports = api;