const Singer = require('../models/singerData');
const slugify = require('slugify');
const asyncHandler = require('express-async-handler');
const ApiError = require('../utils/apiError');



exports.getSingersData = asyncHandler(async (req, res) => {
    const singers = await Singer.find({});
    res.status(200).json({results: singers.length, data: singers});
});


exports.createSinger = asyncHandler(async (req, res, next) => {
    const {name, image, url} = req.body;
    const singer = await Singer.create({name, image, url, slug: slugify((name, url))});
    if(req.file){
        singer.image = req.file.path;
    }
    res.status(201).json({data: singer});
});



exports.getSingerById = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const singer = await Singer.findById(id);
    if(!singer){
        // res.status(404).json({msg: 'not found ' + id });
        return next(new ApiError('this singer with id: ' + id + ' not found', 404));
    }
    res.status(201).json({data: singer});
});



exports.updateSingerById = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const {name, image, url} = req.body;
    const singer = await Singer.findOneAndUpdate({ _id: id }, { name, image, url, slug: slugify(name, image, url) }, { new: true });
    if(!singer){
        // res.status(404).json({msg: 'not found ' + id });
        return next(new ApiError('this singer with id: ' + id + ' not found', 404));
    }
    res.status(201).json({data: singer});
});



exports.deleteSingerById = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const singer = await Singer.findByIdAndDelete (id);
    if(!singer){
        // res.status(404).json({msg: 'not found ' + id });
        return next(new ApiError('this singer with id: ' + id + ' not found', 404));
    }
    res.status(204).send();
});