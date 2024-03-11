const User = require("../model/UserModel")
const jwt = require("jsonwebtoken")
require("dotenv").config();
const generateToken = (_id) => {
    const token = jwt.sign({_id}, process.env.JWT_SCRET, { expiresIn: '365d' });
    return token;
};
    
const createUser = async (req, res) => {
    try {
        const { nom, adresse, email, Mdp } = req.body;
        const user = new User({ nom, adresse, email, Mdp });
        await user.save();
        res.status(201).json({user, token : generateToken(user._id)});
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: err.message });
    }
};

module.exports = {createUser};
