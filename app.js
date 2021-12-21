const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.use('/api', require('./routes/route'));

app.listen(3000, console.log("Server started at 3000"));