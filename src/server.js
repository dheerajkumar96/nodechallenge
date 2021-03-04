const express = require('express'),
app = express(),
bodyParser = require('body-parser'),
port = '8085';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('../src/routes/ticketRoutes.js');
routes(app);
app.listen(port, ()=>{
    console.log(`Node challenge port is running on ${port}`);
});
