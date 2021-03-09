/* eslint-disable @typescript-eslint/no-var-requires */
/*eslint global-require: "error"*/
const passport = require('passport');
const PassportGoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
require('dotenv').config();

passport.use(new PassportGoogleStrategy({
  clientID: process.env.clientID,
  clientSecret: process.env.clientSecret,
  callbackURL: '/auth/google/callback'
},
function(_accessToken: string, _refreshToken: string, profile: any, done: any) {
  done(null, profile);
}
));
