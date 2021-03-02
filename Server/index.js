/* eslint-disable camelcase */
const path = require('path');

const mysql = require('mysql2');
const Sequelize = require('sequelize');
const express = require('express');
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');


const dotenv = require('dotenv');
dotenv.config({
  path: path.resolve(__dirname, '../.env')
});
port = process.env.PORT || 8080;
const dist = path.resolve(__dirname, '..', 'client', 'dist');
const app = express();

const db = require('./db/database.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(dist));
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());
// line 34 - 61 all used for google login
app.use(session({
  secret: process.env.clientSecret,
  saveUninitialized: false,
  resave: true
}));

app.listen(port, function () {
  console.log('Server is listening on http://127.0.0.1:' + port);
});
