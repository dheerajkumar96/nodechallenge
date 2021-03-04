'use strict';

const Sequelize = require('sequelize');

const database = new Sequelize('dheerajdb','dheeraj','dheeraj96#', {
    dialect: 'mssql',
    host: 'dheeraj-1.cqe7kjpkmqob.ap-south-1.rds.amazonaws.com',
    port: 1433,
    maxConcurrentQueries: 5,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
      }
});

database
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = {
    database
};