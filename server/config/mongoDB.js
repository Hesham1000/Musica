const mongoose = require('mongoose');

const dbConnection = () => {
    mongoose.connect(process.env.DB_URL)
    .then((conn) => {
        console.log("Successfull");
    })
    // .catch((err) => {
    //     console.log(err);
    //     process.exit(1);
    // }
    // );
}
module.exports = dbConnection;
