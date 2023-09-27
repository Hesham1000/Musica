const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playlistData = new Schema(
    {
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

const Playlist = mongoose.model('wegzplaylist', playlistData);

module.exports = Playlist;