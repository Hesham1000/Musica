const fs = require('fs');
const dotenv = require('dotenv');
// const Song = require('./models/songData');
const Singer = require('./models/singerData');
const dbConnection = require('./config/mongoDB');


dotenv.config({path: 'config.env'});

dbConnection();


const songs = JSON.parse(fs.readFileSync('./sendDataDB/singers.json'));


const sendData = async () => {
    try{
        await Singer.create(songs);
        console.log("Data inserted");
        process.exit();
    }
    catch(error){
        console.log(error);
    }
};

const destroyData = async () => {
    try{
        await Singer.deleteMany(songs);
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
