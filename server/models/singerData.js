const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const singerData = new Schema({
    name: {
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    image: {
        type: String,
        unique: true,
        required: true
    },
    url: {
        type: String,
        unique: true,
        required: true
    },
    slug: {
        type: String,
        lowercase: true
    }
}, { timestamps: true });

const Singer = mongoose.model('singer', singerData);
module.exports = Singer;