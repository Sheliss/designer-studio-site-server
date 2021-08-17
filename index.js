const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const handleWorks = require('./handleWorks');

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

app.get('/', (req, res) => {
    res.send('Works')
})

app.get('/works-list', handleWorks.getWorksList);
app.get('/works-all', handleWorks.getAllWorks);
app.get('/work', handleWorks.getSingleWork);

app.use(express.static(__dirname  + '/img'));
