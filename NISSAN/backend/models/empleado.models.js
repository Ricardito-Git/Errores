import { Schema, model } from "mongoose";


const EsquemaEmpleados = new Schema({
    nombre: String,
    empleado: String,
    No: Number,
    Sueldo: Number
})

export const TablaEsclavos = new model("TablaEsclavos", EsquemaEmpleados) 