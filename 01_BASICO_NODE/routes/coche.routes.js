const express = require("express");
const ruta = express.Router();

let coches = [
    { _id: 0, marca: "Seat", modelo: "Ibiza", año: 2000 },
    { _id: 1, marca: "Opel", modelo: "Astra", año: 2001 },
    { _id: 2, marca: "Renault", modelo: "Clio", año: 2002 },
    { _id: 3, marca: "Citroen", modelo: "C3", año: 2003 },
    { _id: 4, marca: "Volkswagen", modelo: "Golf", año: 2004 },
];

ruta.get("/", (req, res) => {
    res.status(200).send(coches);
});

ruta.get("/:id", (req, res) => {
    let coche = coches.find(coche => coche._id === parseInt(req.params.id))
    if (!coche) {
        res.status(404).send("Coche no encontrado")
    } else {
        res.status(200).send(coche)
    }
})

ruta.get("/marca/:marca", (req, res) => {
    let cochesBusqueda = coches.filter(coches => coches.marca === req.params.marca)
    res.status(200).send(cochesBusqueda)
})

module.exports = ruta 