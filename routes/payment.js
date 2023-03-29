const express = require('express');
const router = express.Router();
const db = require('../db');


router.get('/', async (req, res) => {
  try {
    const query = 'SELECT * FROM payments'; // consulta SQL para recuperar todos los registros
    const result = await db.query(query); // ejecuta la consulta
    res.json(result.rows); // devuelve los resultados como un objeto JSON
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener los registros de la tabla payments');
  }
});

module.exports = router;
