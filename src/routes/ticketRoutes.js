'use strict';

const ticketHandler = require('../controllers/ticketController.js');

module.exports = app => {
app.route('/ticket/create').post(ticketHandler.createTicket);
app.route('/ticket/get').get(ticketHandler.getTicket);
app.route('/ticket/delete').delete(ticketHandler.deleteTicket);
app.route('/ticket/update').put(ticketHandler.updateTicket);
app.route('/ticket/getanalyticsbyrevenue').get(ticketHandler.getAnalyticsByRevenue  );
app.route('/ticket/getanalyticsbyvisits').get(ticketHandler.getAnalyticsByVisits);
}