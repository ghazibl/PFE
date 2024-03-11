const mongoose = require('mongoose');
const connect = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("connected to db");
    } catch (err) {
        console.log("error connecting to db", err.message);
        process.exit(1); 
    }
};

module.exports = { connect };
