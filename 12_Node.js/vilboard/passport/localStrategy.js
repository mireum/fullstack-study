const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const { client } = require('../dagabase');
const db = client.db('board');

module.exports = () => {

};
