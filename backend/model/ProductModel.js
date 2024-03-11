const mongoose = require("mongoose")

const produitModel = mongoose.Schema(
    {
        nom: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        prix: {
            type: Number,
            required: true
        },
        quantite: {
            type: Number,
            required: true
        }
    }
)
module.exports = mongoose.model("product", produitModel)