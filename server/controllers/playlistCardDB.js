const Playlist = require('../models/playlistData');
const slugify = require('slugify');
const asyncHandler = require('express-async-handler');
const ApiError = require('../utils/apiError');



exports.createFilter = (req, res, next) => {
    let filter = {};
    if(req.params.singerId) filter = {singer: req.params.singerId};
    req.filterBelong = filter;
    next();
}

exports.getPlaylistsData = asyncHandler(async (req, res) => {
    const playlists = await Playlist.find(req.filterBelong);
    res.status(200).json({results: playlists.length, data: playlists});
});


exports.createPlaylist = asyncHandler(async (req, res) => {
    const {image, url, singer} = req.body;
    const playlist = await Playlist.create({image, url, singer, slug: slugify((image, url))});
    res.status(201).json({data: playlist});
});



exports.getPlaylistById = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const playlist = await Playlist.findById(id);
    if(!playlist){
        return next(new ApiError('this singer with id: ' + id + ' not found', 404));
    }
    res.status(201).json({data: playlist});
});



exports.updatePlaylistById = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const {image, url} = req.body;
    const playlist = await Playlist.findOneAndUpdate({ _id: id }, {image, url, singer, slug: slugify(image, url) }, { new: true });
    if(!playlist){
        return next(new ApiError('this singer with id: ' + id + ' not found', 404));
    }
    res.status(201).json({data: playlist});
});



exports.deletePlaylistById = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const playlist = await Playlist.findByIdAndDelete (id);
    if(!playlist){
        return next(new ApiError('this singer with id: ' + id + ' not found', 404));
    }
    res.status(204).send();
});