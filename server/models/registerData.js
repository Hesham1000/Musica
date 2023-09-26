const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const RegisterData = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Please enter an email'],
        lowercase: true
    },
    password: {
        type: String,
        unique: true,
        required: true,
        minLength: [8, 'Minimum password length is 8 characters']
    },
}, { timestamps: true });

RegisterData.pre('save', async function (next) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});


const Register = mongoose.model('Register', RegisterData);
module.exports = Register;