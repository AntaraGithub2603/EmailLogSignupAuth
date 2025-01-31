require('dotenv').config();
const express = require('express');
const app = express();
 const connection = require("./db");

//database connection
 connection();
//middlewares
app.use(express.json())


const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));