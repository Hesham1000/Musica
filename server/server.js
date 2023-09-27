const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');

const cookie = require('cookie-parser');

dotenv.config({path: 'config.env'});
const ApiError = require('./utils/apiError');
const globalError = require('./middlewares/errorMiddleware');
const dbConnection = require('./config/mongoDB');

// API import
const singerCardAPI = require('./api/singerCardAPI');
const songCardAPI = require('./api/songCardAPI');
const registerAPI = require('./api/registerAPI');
const playlistAPI = require('./api/playlistCardAPI');



dbConnection();

const app = express();

app.use(
    cors({
        origin: "http://localhost:3000"
    })
);

app.use(cookie());




app.use(express.json());

app.use(express.static('public'));


if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}


app.use('/api/singers', singerCardAPI);
app.use('/api/songs', songCardAPI);
app.use('/api/registers', registerAPI);
app.use('/api/playlists', playlistAPI);



// app.get('/cookies', (req, res) => {
//     res.cookie('userName', true, {maxAge: 1000 * 60 * 60 * 24});
//     res.send('cookies are made');
// });
// app.get('/delete-cookies', (req, res) => {
//     // res.cookie('hesham', true, {maxAge: 1000 * 60 * 60 * 24});
//     res.clearCookie('_xsrf');
//     res.send('cookie deleted');
// });

app.all('*', (req, res, next) => {
    next(new ApiError('Can not find this route: ' + req.originalUrl, 400));
});

app.use(globalError);



const PORT = process.env.PORT;
const server =  app.listen(PORT);


process.on('unhandledRejection', (err) => {
    console.error('UnhandledRejection Errors: ' + err.name + err.message);
    server.close(() => {
        process.exit(1);
    });
});





