const express = require('express');
const router = express.Router();
const db = require('../db');


router.get('/', async (req, res) => {
  try {
    const query = 'SELECT * FROM payments';
    const result = await db.query(query);
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener los registros de la tabla payments');
  }
});

module.exports = router;
