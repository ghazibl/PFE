    require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connect } = require("./config/db.js");
const router = require("./routers/UserRoute.js");
const productRouter = require("../backend/routers/ProductRoute.js");

const app = express();
app.use(cors());
app.use(express.json());

connect(); 

app.listen(process.env.PORT, () => {
    console.log(`server is listening ${process.env.PORT}`);
});

app.use('/api/users', router); // corrected path for router middleware
app.use('/api/products', productRouter); // corrected path for router middleware

