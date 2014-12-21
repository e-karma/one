module.exports = function(app) {
  var express = require('express');
  var todosRouter = express.Router();

  todosRouter.get('/', function(req, res) {
    res.send({
      "todos": [
{"id":1,"title":"learn Ember.js","isCompleted":"true"},{"id":2,"title":"Second Todo...","isCompleted":"true"},{"id":3,"title":"Buy Christmas Gifts","isCompleted":"false"},{"id":4,"title":"Plan New Years Eve","isCompleted":"false"},{"id":5,"title":"Fifth To-Do","isCompleted":"true"},{"id":6,"title":"Another Todo","isCompleted":"true"},{"id":7,"title":"learn ANOTHER LANGUAGE","isCompleted":"false"}
      ]
    });
  });

  todosRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  todosRouter.get('/:id', function(req, res) {
    res.send({
      "todos": {
        "id": req.params.id
      }
    });
  });

  todosRouter.put('/:id', function(req, res) {
    res.send({
      "todos": {
        "id": req.params.id
      }
    });
  });

  todosRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/todos', todosRouter);
};
