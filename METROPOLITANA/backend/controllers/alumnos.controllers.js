import { TablaAlumnos } from "../models/alumnos.models";

TablaAlumnos.create({

    nombre: "Karla",
    calificacion: 10,
    Materia: "ingles",
})

TablaAlumnos.create({

    nombre: "Ricardo",
    calificacion: 9,
    Materia: "matematicas",
})

TablaAlumnos.create({

    nombre: "Juan",
    calificacion: 8,
    Materia: "español",
})

TablaAlumnos.create({

    nombre: "Renata",
    calificacion: 9,
    Materia: "biologia",
})



export const test = () => console.log("Si, se esta llamando al controlador")