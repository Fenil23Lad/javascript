const express = require('express');
const router = express.Router();
const quizController = require("./../../app/controllers/quizController");

const middleware = require('../middlewares/auth');

module.exports.setRouter = (app) => {

    // defining routes.

    app.get('/getTotal', middleware.isAuthorize, [quizController.getTotal]);
    app.post('/setanswer', middleware.isAuthorize, [quizController.setanswer]);

}
