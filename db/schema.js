const mongoose = require('mongoose');

const RegisterSchema = new mongoose.Schema({
    value : {
        type : String,
        required : true
    }
})

const Register = mongoose.model('Dojeto', RegisterSchema);

module.exports = Register;