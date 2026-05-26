import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import { test } from "./backend/controllers/empleado.controllers.js";


dotenv.config();
mongoose.set('strictQuery', true);
mongoose.connect(process.env.url_bd)

.then(() => console.log("Funciono la base de datos ")
)
.catch((error) => console.log("No funciona la base de datos"))

const app = express();
app.use (cors());

app.listen(4000, () => console.log("Funciona correctamente el servidor "))

test();