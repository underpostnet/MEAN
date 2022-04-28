const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// const path = require('path');
const api = require('./api');
// const helmet = require('helmet');

const app = express();
const rootApi = '/api/v1';
// const ROOT_FOLDER = path.join(__dirname, '..');

// Settings
app.set('port', process.env.PORT || 3200);

// Middlewares
// const corsOptions = {origin: "http://localhost:4200"}

// Security
// app.use(helmet());
app.use(cors());

// logs http request
app.use(morgan('dev'));

// create application/json parser
app.use(express.json());

// create application/x-www-form-urlencoded parser
app.use(express.urlencoded({ extended: false }));

// Routes
app.use(rootApi, api);

module.exports = app;
