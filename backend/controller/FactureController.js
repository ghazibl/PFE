import Facture from "../model/FactureModel.js"

const createFacture = async (req, res) => {
    try {
        const { Number, clientName, productName, quantity,total,date,status } = req.body;
        const facture = new Facture({ Number, clientName, productName, quantity,total,date,status });
        await facture.save();
        res.status(201).json(facture);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: err.message });
    }
};


const getFactures = async (req, res) => {
    try {
        const factures = await Facture.find();
        res.status(200).json(factures);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: err.message });
    }
};

const getFactureByStatues = async (req, res) => {
    const { status } = req.params;

    try {
        const factures = await Facture.find({ status });
        res.status(200).json(factures);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: err.message });
    }
};

export { createFacture,getFactures,getFactureByStatues  };