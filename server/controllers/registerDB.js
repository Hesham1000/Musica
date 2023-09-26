const Register = require('../models/registerData');
const slugify = require('slugify');
const asyncHandler = require('express-async-handler');
const ApiError = require('../utils/apiError');
const jwt = require('jsonwebtoken');



exports.getRegistersData = asyncHandler(async (req, res) => {
    const registers = await Register.find({});
    res.status(200).json({data: registers});
});


const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
    return jwt.sign({id}, 'hesham secret', {
        expiresIn: maxAge
    });
}

exports.createRegister = asyncHandler(async (req, res, next) => {
    const {username, email, password} = req.body;
    const register = await Register.create({username, email, password, slug: slugify((username, email, password))});
    const token = createToken(register._id);
    res.cookie('jwt', token, {
        httpOnly: true,
        maxAge: maxAge * 1000,
        secure: true,
    });
    res.status(201).json({user: register._id});
});



// exports.getSingerById = asyncHandler(async (req, res, next) => {
//     const { id } = req.params;
//     const singer = await Singer.findById(id);
//     if(!singer){
//         // res.status(404).json({msg: 'not found ' + id });
//         return next(new ApiError('this singer with id: ' + id + ' not found', 404));
//     }
//     res.status(201).json({data: singer});
// });



// exports.updateSingerById = asyncHandler(async (req, res, next) => {
//     const { id } = req.params;
//     const name = req.body.name;
//     const image = req.body.image;
//     const url = req.body.url;
//     const singer = await Singer.findOneAndUpdate({ _id: id }, { name, image, url, slug: slugify(name, image, url) }, { new: true });
//     if(!singer){
//         // res.status(404).json({msg: 'not found ' + id });
//         return next(new ApiError('this singer with id: ' + id + ' not found', 404));
//     }
//     res.status(201).json({data: singer});
// });



// exports.deleteSingerById = asyncHandler(async (req, res, next) => {
//     const { id } = req.params;
//     const singer = await Singer.findByIdAndDelete (id);
//     if(!singer){
//         // res.status(404).json({msg: 'not found ' + id });
//         return next(new ApiError('this singer with id: ' + id + ' not found', 404));
//     }
//     res.status(204).send();
// });