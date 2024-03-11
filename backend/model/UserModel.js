const mongoose = require('mongoose');


const userModel = mongoose.Schema(
    {
        nom: {
            type: String,
            required: true
        },
        adresse: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
         Mdp: {
            type: String,
            required: true
        }
    }
)
module.exports = mongoose.model('User', userModel);