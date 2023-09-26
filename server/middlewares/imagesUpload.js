const path = require('path');
const multer = require('multer');


var Storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images');
    },
    filename: (req, file, cb) => {
        let ext = path.extname(file.originalname);
        cb(null, Date.now() + ext);
    }
})

var uploadImage = multer({
    storage: Storage,
    fileFilter: (req, file, callback) => {
        if(
            file.mimetype === "image.png" || file.mimetype === "image.jpg" || file.mimetype === "image.jpeg" || file.mimetype === "image.webp"
        ){
            callback(null, true);
        }
        else{
            console.log("this type of image not found");
            callback(null, false);
        }
    },
    limits: {
        fileSize: 1024 * 1024 * 2
    }
})


module.exports = uploadImage;