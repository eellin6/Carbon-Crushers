/* eslint-disable camelcase */
import { Request, Response, NextFunction } from 'express';
const path = require('path');

const mysql = require('mysql2');
const Seq = require('sequelize');
const express = require('express');
// const { Request, Response, NextFunction } = require('express');
const passport = require('passport');
const { PassportGoogleStrategy } = require('../passport.config.ts');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const dotenv = require('dotenv');
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const port = process.env.PORT || 8080;
const dist = path.resolve(__dirname, '..', 'client', 'dist');
const app = express();

const database = require('./db/database.ts');
const { addUser, findUser } = require('./db/database.ts');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(dist));
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());
// line 30 - 68 all used for google login
app.use(session({
  secret: process.env.clientSecret,
  saveUninitialized: false,
  resave: true
}));

passport.serializeUser((user: any, done: any) => {
  done(null, user);
});
passport.deserializeUser((user: any, done: any) => {
  done(null, user);
});

app.get('/auth/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }), (req: Request, res: Response) => console.info('FIRST RES', res));

app.get('/auth/error', (req: Request, res: Response) => res.send('Unknown Error'));

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/auth/error' }), (req: any, res: any) => {
    const { displayName } = req.user;
    res.cookie('crushers', displayName);
    return addUser(displayName)
      .then(() => res.redirect('/'))
      .catch((err: string) => console.warn(err));
  }
);

// check if a user is logged in
app.get('/isLoggedin', (req: Request, res: Response) => {
  req.cookies.crushers ? res.send(true) : res.send(false);
});

// logout route
app.delete('/logout', (req: Request, res: Response) => {
  res.clearCookie('crushers');
  res.json(false);
});

app.get('/:username', (req: Request, res: Response) => {
  const { user } = req.body;
  return findUser(user)
  .then((data: any) => res.send(data))
  .catch((err: string) => console.warn(err));
})

app.listen(port, () => console.log('Server is listening on http://127.0.0.1:' + port));
