import express from "express";
import { signup, login } from '../controllers/authController.js';

const rotas = express.Router();

rotas.get("/signup", signup);
rotas.get("/login", login);

export default rotas;