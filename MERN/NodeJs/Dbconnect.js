let mongo = require('mongoose');
require("dotenv").config();

let url = process.env.DB

mongo.connect(url)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log(err));

