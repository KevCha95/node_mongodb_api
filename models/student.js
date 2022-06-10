const mongoose = require('mongoose');


const studentSchema = new mongoose.Schema({
    firstName : {type: String, required: true},
    lastName : {type: String, required: true},
    age : {type: Number, required: true},
    birthDate : {type: Date, default: Date.now}
});

module.exports = mongoose.model('student',studentSchema);