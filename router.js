import express from "express";
import  { signup} from "../controllers/user.controller.js";
let routes =express.Router()







routes.post("/signup", signup)

export default routes