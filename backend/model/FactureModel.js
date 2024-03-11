import mongoose from 'mongoose';

const factureModel = mongoose.Schema(
    {
        Number: {
            type: String,
            required: true
        },
        clientName: {
            type: String,
            required: true
        },
        productName: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        total :{
            type: Number,
            required: true
        },
        date:{
            type: Date,
            required: true

        },
        status :{
            type: String,
            required: true,
            enum: ['en cours', 'complet', 'en attente'] 

        }
    }
)
const Facture = mongoose.model('Facture',factureModel)
export default Facture;