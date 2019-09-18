var db = require("../models");

module.exports = function (app) {
    app.get("/api/volunteers", function (req, res) {
        db.Vols.findall({}).then(function (dbVols) {
            res.json(dbVols);
        });
    });
    app.post("/api/volunteers", function (req, res) {
        db.Vols.create({
            text: req.body.text,
            complete: req.body.complete
        }).then(function (dbVols) {
            res.json(dbVols);
        })
            .catch(function (err) {
                res.json(err);
            });
    });
    app.delete("/api/volunteers/:id", function (req, res) {
        db.Vols.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbVols) {
            res.json(dbVols);
        });
    });
    app.put("/api/volunteers", function (req, res) {
        db.Vols.update({
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