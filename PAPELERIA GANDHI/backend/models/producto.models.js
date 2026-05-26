import { Schema, model } from "mongoose";


const EsquemaProductos = new Schema({
    producto: String,
    stock: Number,
    precio: Number,
})

export const TablaProductos = new model("TablaProdcutos", EsquemaProductos) 