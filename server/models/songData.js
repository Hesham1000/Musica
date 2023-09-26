const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songData = new Schema(
    {
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
        },
        singer: {
            type: mongoose.Schema.ObjectId,
            ref: 'Singer',
            required: true
        }
    },{ timestamps: true }
);

const Song = mongoose.model('song', songData);

module.exports = Song;