const express = require("express");
const router = express.Router();
const {
  getALlUsuarios,
  getUsuario,
  deleteUsuario,
  updateUsuario,
} = require("../controllers/users.controllers");

const { validarUsuario } = require("../controllers/login.controllers");
const { crearBeneficio} = require("../controllers/beneficio.controller");
const { formularioRegistroAsistencia } = require("../controllers/asistencia.controller");
const {obtenerAdjudicados}  = require("../controllers/adjudicados.controller");
//rutas para CRUD de usuario...
router.get("/usuarios", getALlUsuarios);

router.get("/usuario/:id", getUsuario);

router.delete("/usuario/:id", deleteUsuario);

router.put("/usuario/:id", updateUsuario);

//rutas para inicio de sesión...
router.post("/login", validarUsuario);

//ruta para creacion de beneficio
router.post("/beneficio", crearBeneficio);

//ruta para registro de asistencia
router.post("/asistenciataller",formularioRegistroAsistencia )

router.get("/adjudicados",obtenerAdjudicados)
module.exports = router;
