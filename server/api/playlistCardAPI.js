const express = require('express');
const {createPlaylistValidator, getPlaylistValidator, updatePlaylistValidator, deletePlaylistValidator} = require('../utils/validators/playlistValidator');


const {createFilter, getPlaylistsData, createPlaylist, getPlaylistById, updatePlaylistById, deletePlaylistById} = require('../controllers/playlistCardDB');

const api = express.Router({mergeParams: true});


api.route('/').get(createFilter, getPlaylistsData).post(createPlaylistValidator, createPlaylist);
api.route('/:id').get(getPlaylistValidator, getPlaylistById)
.put(updatePlaylistValidator, updatePlaylistById)
.delete(deletePlaylistValidator, deletePlaylistById);

module.exports = api;