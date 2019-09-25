var db = require("../models");

module.exports = function (app) {
    app.get("/api/volunteers", function (req, res) {
        db.Volunteer.findAll({}).then(function (dbVols) {
            res.json(dbVols);
        });
    });
    app.post("/api/volunteers", function (req, res) {
        db.Volunteer.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber
        }).then(function (dbVols) {
            res.json(dbVols);
        })
            .catch(function (err) {
                res.json(err);
            });
    });
    app.delete("/api/volunteers/:id", function (req, res) {
        db.Volunteer.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbVols) {
            res.json(dbVols);
        });
    });
    app.put("/api/volunteers", function (req, res) {
        db.Volunteer.update({
            text: req.body.text,
            complete: req.body.complete
        }, {
            where: {
                id: req.body.id
            }
        }).then(function (dbVols) {
            res.json(dbVols);
        })
            .catch(function (err) {
                res.json(err);
            });
    });
};