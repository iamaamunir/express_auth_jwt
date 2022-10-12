const express = require('express')
const userRouter = express.Router()
const authController = require('../controllers/authController')
const passport = require('passport')


require("dotenv").config();
userRouter.post('/signup',  passport.authenticate('signup', {session:false}), authController.signUp)
userRouter.post('/login', passport.authenticate('login', {session:false}), authController.login)

module.exports = userRouter