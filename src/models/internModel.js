
const mongoose = require('mongoose');

const internSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true 
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    mobile:{
        type: String,
        required: true,
        unique: true 
    },
    collegeName: {
        type: String,
        ref: 'college',
        required: true
    },
    isDeleted:{
      type: Boolean,
      default: false
    }
},{timestamps: true})
const intern = mongoose.model('interns', internSchema);
module.exports = intern;


// Intern Model
// { name: {mandatory}, email: {mandatory, valid email, unique}, 
//mobile: {mandatory, valid mobile number, unique}, 
//collegeId: {ObjectId, ref to college model, isDeleted: {boolean, default: false}}