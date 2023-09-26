const express = require('express');
const {createSongValidator, getSongValidator, updateSongValidator, deleteSongValidator} = require('../utils/validators/songValidator');


const {createFilter, getSongsData, createSong, getSongById, updateSongById, deleteSongById} = require('../controllers/songCardDB');

const api = express.Router({mergeParams: true});


api.route('/').get(createFilter, getSongsData).post(createSongValidator, createSong);
api.route('/:id').get(getSongValidator, getSongById)
.put(updateSongValidator, updateSongById)
.delete(deleteSongValidator, deleteSongById);

module.exports = api;