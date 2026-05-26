import { TablaEsclavos } from "../models/empleado.models.js";

TablaEsclavos.create({
    No:22277272,
    nombre: "Karla",
    sueldo: 10000000,
    Empleado: "Ingeniero",
})

TablaEsclavos.create({
    No:12121212,
    nombre: "Ricardo",
    sueldo: 20000,
    Empleado: "Licenciado",
})

export const test = () => console.log("Si, se esta llamando al controlador")