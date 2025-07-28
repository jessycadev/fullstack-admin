import express from "express";
import { signup } from '../controllers/authController.js';

// const { signup } = require('../controllers/authController');
// import { signupValidation } from "../middlewares/AuthValidation"
// const { signupValidation } = require('../middlewares/AuthValidation');

// const rotas = require('express').Router;
const rotas = express.Router();

rotas.get("/login", signup);

// rotas.post('/login', (req, res) => {
//   res.send('login sucess');
// })

// rotas.post('/signup', signupValidation, signup);

export default rotas;