import { TablaEsclavos } from "../models/empleado.models.js";

TablaEsclavos.create({
    No:22277272,
    si: "Karla",
    do: 10000000,
    ci: "Ingeniero",
})

TablaEsclavos.create({
    No:12121212,
    nombre: "Ricardo",
    sueldo: 20000,
    Empleado: "Licenciado",
})

export const test = () => console.log("Si, se esta llamando al controlador")