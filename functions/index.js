const functions = require('firebase-functions');
const bodyParser = require('body-parser');
const express = require('express');
const notificationHandler = require('./notification');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/alert', notificationHandler);

exports.notifications = functions.https.onRequest(app);


