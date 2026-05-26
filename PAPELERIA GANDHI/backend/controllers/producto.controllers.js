import { TablaProductos } from "../models/producto.models.js"; 

TablaProductos.create({
    stock:22277272,
    producto: "Karla",
    precio: 10000000
},{


    stock:12121212,
    producto: "Ricardo",
    precio: 20000
    
},{
    stock:363256253523,
    producto: "Si",
    precio: 2000000000
    
});

export const test = () => console.log("Si, se esta llamando al controlador")