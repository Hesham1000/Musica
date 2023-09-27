const {check} = require('express-validator');
const validatorMiddleware = require('../../middlewares/validatorMiddleware');
const Singer = require('../../models/singerData');
const Playlist = require('../../models/playlistData');


exports.createPlaylistValidator = [
    check('image').notEmpty().withMessage('required'),
    check('singer').notEmpty().isMongoId().withMessage('playlist must belong to a singer')
    .custom((singerId) => Singer.findById(singerId).then((singer) => {
        if(!singer){
            return Promise.reject(
                new Error('no singer for this id' + singerId)
            )
        }
    })),
    validatorMiddleware,
];

exports.getPlaylistValidator = [
    check('id').isMongoId().withMessage('Invalid singer id')
    .custom((playlistId) => Playlist.findById(playlistId).then((id) => {
        if(!id){
            return Promise.reject(
                new Error('no id for this song')
            )
        }
    }))
    ,
    validatorMiddleware,
];


exports.updatePlaylistValidator = [
    check('id').isMongoId().withMessage('Invalid singer id'),
    validatorMiddleware,
];


exports.deletePlaylistValidator = [
    check('id').isMongoId().withMessage('Invalid singer id'),
    validatorMiddleware,
];