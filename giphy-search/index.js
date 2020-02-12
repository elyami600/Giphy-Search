const express = require('express');
const app     = express();
const axios   = require('axios');
//const TOKEN = require('./api_key');

const port = 5000;
const APIKEY = process.env.GIPHY_API_TOKEN || TOKEN ; //thi is the professor Token 












app.listen(port, () =>console.log(`Hey!! I am listening on port ${port}`));