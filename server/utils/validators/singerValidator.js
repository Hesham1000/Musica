const {check} = require('express-validator');
const validatorMiddleware = require('../../middlewares/validatorMiddleware');



exports.createSingerValidator = [
    check('name').notEmpty().withMessage('required')
    .isLength({min: 3}).withMessage('Too short name')
    .isLength({max: 30}).withMessage('Too long name'),
    validatorMiddleware,
];


exports.getSingerValidator = [
    check('id').isMongoId().withMessage('Invalid singer id'),
    validatorMiddleware,
];


exports.updateSingerValidator = [
    check('id').isMongoId().withMessage('Invalid singer id'),
    validatorMiddleware,
];


exports.deleteSingerValidator = [
    check('id').isMongoId().withMessage('Invalid singer id'),
    validatorMiddleware,
];