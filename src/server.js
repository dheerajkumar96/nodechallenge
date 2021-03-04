const express = require('express'),
app = express(),
cors = require('cors'),
bodyParser = require('body-parser'),
port = '8085';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.options('*', cors());
app.use(cors());

// Enable CORS and disable caching.
app.use((req, res, next) => {
    // CORS
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Authorization, Content-Type, Accept, x-version'
    );
    res.header('Access-Control-Allow_Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Cache disable
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');

    next();
});
const routes = require('../src/routes/ticketRoutes.js');
routes(app);
app.listen(port, ()=>{
    console.log(`Node challenge port is running on ${port}`);
});
