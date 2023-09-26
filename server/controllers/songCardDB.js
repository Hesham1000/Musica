const Song = require('../models/songData');
const slugify = require('slugify');
const asyncHandler = require('express-async-handler');
const ApiError = require('../utils/apiError');



exports.createFilter = (req, res, next) => {
    let filter = {};
    if(req.params.singerId) filter = {singer: req.params.singerId};
    req.filterBelong = filter;
    next();
}

exports.getSongsData = asyncHandler(async (req, res) => {
    const songs = await Song.find(req.filterBelong);
    res.status(200).json({results: songs.length, data: songs});
});


exports.createSong = asyncHandler(async (req, res) => {
    const {name, image, url, singer} = req.body;
    const song = await Song.create({name, image, url, singer, slug: slugify((name, image, url))});
    res.status(201).json({data: song});
});



exports.getSongById = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const song = await Song.findById(id);
    if(!song){
        return next(new ApiError('this singer with id: ' + id + ' not found', 404));
    }
    res.status(201).json({data: song});
});



exports.updateSongById = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const {name, image, url} = req.body;
    const song = await Song.findOneAndUpdate({ _id: id }, { name, image, url, singer, slug: slugify(name, image, url) }, { new: true });
    if(!song){
        return next(new ApiError('this singer with id: ' + id + ' not found', 404));
    }
    res.status(201).json({data: song});
});



exports.deleteSongById = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const song = await Song.findByIdAndDelete (id);
    if(!song){
        return next(new ApiError('this singer with id: ' + id + ' not found', 404));
    }
    res.status(204).send();
});