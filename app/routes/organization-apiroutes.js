var db = require("../models");

module.exports = function (app) {

    app.get("api/organizations", function (request, response) {
        var query = {};
        if (request.query.organizer) {
            query.Organizer = request.query.organizer;
        }
        db.Post.findAll({
            where: query,
            include: [db.organizer]
        }).then(function (dbPost) {
            response.json(dbPost);
        });
    });

    app.get("/api/organizations/:id", function(request, response){
        db.Post.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Organizer]
        }).then(function(dbPost){
            response.json(dbPost);
        });
    });

    app.post("/api/organization_post", function(request, response){
        db.Post.create(request.body).then(function(dbPost){
            response.json(dbPost);
        });
    });

    app.delete("/api/organization_post_delete", function(request, response){
        db.Post.destroy({
            where: {
                id: request.params.id
            }
        }).then(function(dbPost){
            response.json(dbPost);
        });
    });

    app.put("/api/organization_post", function(request, response) {
        db.Post.update(
          request.body,
          {
            where: {
              id: request.body.id
            }
          }).then(function(dbPost) {
          response.json(dbPost);
        });
      });



};