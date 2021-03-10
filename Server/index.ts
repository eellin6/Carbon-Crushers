/* eslint-disable camelcase */
/*eslint global-require: "error"*/
/* eslint-disable @typescript-eslint/no-var-requires */
import { Request, Response } from 'express';
// import HomePage from '../client/src/components/HomePage';
// import Profile from '../client/src/components/Profile';
const path = require('path');


const express = require('express');
const { Request, Response, NextFunction } = require('express');
const passport = require('passport');
const { PassportGoogleStrategy } = require('../passport.config.ts');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const dotenv = require('dotenv');
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const port = process.env.PORT || 8080;
const dist = path.resolve(__dirname, '..', 'client', 'dist');
const app = express();
const cloudinary = require('cloudinary');
const database = require('./db/database.ts');
const { addUser, findUser, Users, Stats, getAllStats, addShower } = require('./db/database.ts');
console.info(database);
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
cloudinary.config({
  cloud_name: process.env.cloudName,
  api_key: process.env.cloudinaryAPI,
  api_secret: process.env.cloudinarySecret
});
passport.serializeUser((user: any, done: any) => {
  done(null, user);
});
passport.deserializeUser((user: any, done: any) => {
  done(null, user);
});

// app.use('/profile', Profile);
// app.use('/', HomePage);

app.get('/auth/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }), (req: Request, res: Response) => console.info('FIRST RES', res));

app.get('/auth/error', (req: Request, res: Response) => res.send('Unknown Error'));

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/auth/error' }), (req: any, res: any) => {
    const { displayName, photos } = req.user;
    const { value } = photos[0];
    res.cookie('crushers', displayName);
    return addUser(displayName, value)
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

app.get('/user', (req: Request, res: Response) => {
  findUser(req.cookies.crushers)
    .then((data: any) => res.json(data))
    .catch((err: any) => console.warn(err));
});

app.post('/profilePic', (req: Request, res: Response) => {

  Users.update(
    {picture: req.body.picture},
    {where: { name: req.cookies.crushers}}
  )
    .then((data: any) => console.info(data))
    .catch((err: string) => console.warn(err));

});


app.get('/statsData', (req: Request, res: Response) => {
  return getAllStats(req.cookies.crushers)
    .then((data: any) => res.json(data))
    .catch((err: string) => console.warn(err));
});


app.post('/statsData', (req: Request, res: Response) => {
  //console.log('req cookies', req.cookies)
  const name = req.cookies.crushers;
  const {meat_dine, energy, water, recycling, mileage, total} = req.body;
  const newStats = new Stats({meat_dine, energy, water, recycling, mileage, total, name});
  newStats.save()
    .then((stuff) => console.info('stats saved', stuff))
    .catch((err:string) => console.warn(err));
});

app.post('/shower', (req: Request, res: Response) => {
  const name: string = req.cookies.crushers;
  const { time } = req.body;
  addShower(name, time)
    .then((data) => res.send(data))
    .catch((err: string) => console.warn(err));
});

app.listen(port, () => console.info('Server is listening on http://127.0.0.1:' + port));
