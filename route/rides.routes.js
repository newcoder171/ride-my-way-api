module.exports = function (app) {

    const rides = require('../controller/rides.controller.js');

    // Create a new Customer
    app.post('/api/v1/rides', rides.create);

    // Retrieve all Customer
    app.get('/api/v1/rides', rides.findAll);

    // Retrieve a single Customer by Id
    app.get('/api/v1/rides/:id', rides.findOne);

    // Update a Customer with Id
    app.put('/api/v1/rides/:id', rides.update);

    // Delete a Customer with Id
    app.delete('/api/v1/rides/:id', rides.delete);

    // Request to join ride of specific Id
    app.put('/api/v1/rides/:id/requests', rides.update);
}