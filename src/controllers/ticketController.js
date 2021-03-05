'use strict';

const database = require('../database');
const createTicket = async(req,res) => {
let value = req.body;
let query = `insert into tickets(creation,customer,performance,performancetime,ticket) values ('${value.creation}','${value.customer}','${value.performance}','${value.performancetime}',${value.ticket})`;
database.database.query(query).then(data => {
    res.status(200).send("created successfully");
})
.catch(err => {
    res.send(err);
});
};


const getTicket = async(req,res) => {
    let value = req.body;
    let query = `select * from tickets where ticketid = ${value.ticketid}`;
    database.database.query(query, { type: database.database.QueryTypes.SELECT })
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        res.status(500).send(err);
    })
};

const deleteTicket = (req,res) => {
    let value = req.body;
    let query = `update tickets set isDeleted=1 where ticketid = ${value.ticketid}`;
    database.database.query(query)
    .then(data => {
        res.status(200).send('deleted successfully');
    })
    .catch(err => {
        res.status(500).send(err);
    })
};

const updateTicket = (req,res) => {
    let value = req.body;
    let query = `update tickets set performance = '${value.performance}' , performancetime ='${value.performancetime}' where ticketid=${value.ticketid}`;
    database.database.query(query)
    .then(data => {
        res.status(200).send('updated successfully');
    }) 
    .catch(err => {
        res.status(500).json(err);
    })
};

const getAnalyticsByRevenue = async(req,res) => {
    let value = req.query;
    let dates = req.body;
    if(value.method === 'DB aggregation'){
    let query = `select DATENAME(month,creation) month, sum(ticket) summaryProfit from tickets
    where creation between '${dates.startDate}' and '${dates.endDate}'
    group by DATENAME(month,creation)`;
    await database.database.query(query)
    .then(data => {
        console.log(data);
        res.status(200).json(data);
    })
    .catch(err => {
        res.status(500).send(err);
    });
    }else if(value.method === 'js algorithms'){
        let query = `select creation date, sum(ticket) summaryProfit from tickets
        where creation between '${dates.startDate}' and '${dates.endDate}'
        group by creation`
        let data = await database.database.query(query);
        res.status(200).json(data);
    }

};

const getAnalyticsByVisits = async(req,res) => {
    let value = req.query;
    let dates = req.body;
    if(value.method === 'DB aggregation'){
    let query = `select DATENAME(month,creation) month, sum(ticket/150) summaryVisits from tickets
    where creation between '${dates.startDate}' and '${dates.endDate}'
    group by DATENAME(month,creation)`;
    await database.database.query(query)
    .then(data => {
        console.log(data);
        res.status(200).json(data);
    })
    .catch(err => {
        res.status(500).send(err);
    });
    }else if(value.method === 'js algorithms'){
        let query = `select creation date, sum(ticket/150) summaryVisits from tickets
        where creation between '${dates.startDate}' and '${dates.endDate}'
        group by creation`
        let data = await database.database.query(query);
        res.status(200).json(data);
    }

};
module.exports = {
    createTicket,
    getTicket,
    deleteTicket,
    updateTicket,
    getAnalyticsByRevenue,
    getAnalyticsByVisits
}