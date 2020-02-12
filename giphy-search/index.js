const express  = require('express');
const app      = express();
const axios    = require('axios');
const TOKEN    = require('./api_key');

const port = 5000;


app.use(express.json());

const APIKEY = process.env.GIPHY_API_TOKEN || TOKEN ;

app.use(express.static('build'));

app.post('/gif_search', (req, res) => {
    const { searchTerm } = req.body;
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${APIKEY}&limit=8`)
        .then(responde => {
            const results = responde.data.data.map(img => ({
                gifUrl:  img.images.original.url,
                focusUrl: img.images.downsized_large.url
            }));

            res.json({results});

        })
        .catch(() => res.json({msg: 'FAILED'}));
});
o



app.listen(port, () => console.log(`Hey!!  I am listening on port ${port}!`));
