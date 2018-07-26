const models = require('../models');

const createTrip = (req, res) => {
    models.Trips.create({
        tripName: req.body.tripName,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        email: req.body.email
    }).then(response => {
        res.json(response);
    }).catch(err => {
        res.json(err);
    })
}

const getTrip = (req, res) => {
    models.Trips.findAll({
        where: { email: req.params.user }
    })
        .then((trips) => {
            if (trips.length === 0) {
                res.status(422).json({ "error": "User doesn't have trips" })
                return
            }
            res.json({ trips })
        })
        .catch(err => {
            res.json(err)
        })
};

module.exports = { createTrip, getTrip }