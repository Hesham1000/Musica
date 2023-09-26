const {check} = require('express-validator');
const validatorMiddleware = require('../../middlewares/validatorMiddleware');
const Singer = require('../../models/singerData');
const Song = require('../../models/songData');



exports.createSongValidator = [
    check('name').notEmpty().withMessage('required')
    .isLength({min: 3}).withMessage('Too short name')
    .isLength({max: 30}).withMessage('Too long name'),
    check('singer').notEmpty().isMongoId().withMessage('song must belong to a singer')
    .custom((singerId) => Singer.findById(singerId).then((singer) => {
        if(!singer){
            return Promise.reject(
                new Error('no singer for this id' + singerId)
            )
        }
    })),
    validatorMiddleware,
];

exports.getSongValidator = [
    check('id').isMongoId().withMessage('Invalid singer id')
    .custom((songId) => Song.findById(songId).then((id) => {
        if(!id){
            return Promise.reject(
                new Error('no id for this song')
            )
        }
    }))
    ,
    validatorMiddleware,
];


exports.updateSongValidator = [
    check('id').isMongoId().withMessage('Invalid singer id'),
    validatorMiddleware,
];


exports.deleteSongValidator = [
    check('id').isMongoId().withMessage('Invalid singer id'),
    validatorMiddleware,
];