const fs = require('fs');
const dotenv = require('dotenv');
// const Song = require('./models/songData');
// const Singer = require('./models/singerData');
const Playlist = require('./models/playlists');

const dbConnection = require('./config/mongoDB');


dotenv.config({path: 'config.env'});

dbConnection();


const playlists = JSON.parse(fs.readFileSync('./sendDataDB/playlists.json'));


const sendData = async () => {
    try{
        await Playlist.create(playlists);
        console.log("Data inserted");
        process.exit();
    }
    catch(error){
        console.log(error);
    }
};

const destroyData = async () => {
    try{
        await Playlist.deleteMany(playlists);
        console.log("Data destroyed");
        process.exit();
    }
    catch(error){
        console.log(error);
    }
};


if(process.argv[2] === '-s'){
    sendData();
}
else if(process.argv[2] === '-d'){
    destroyData();
}
