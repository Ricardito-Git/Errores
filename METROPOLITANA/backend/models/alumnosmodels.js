import { Schema, model } from "mongoose";


const EsquemaAlumnos = new Schema({
    name: String,
    calification: Number,
    advice: String
})

export const TablaAlumnos = new model("Tabla Alumnos", EsquemaAlumnos) 