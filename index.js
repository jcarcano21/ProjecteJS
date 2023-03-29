const express = require('express');
const app = express();
const fs= require('fs')
const { Pool } = require('pg');
const path = require('path');
// const db = require('db');
const pool = new Pool(JSON.parse(fs.readFileSync(__dirname + '/db_credentials.json')))

app.use('/', express.static('public'))
// app.use('/', Express.static(path.join(_dirname, 'public')))
// app.get('/', (req, res) => {
//   res.send('Hola, mundo!');
//   res.json([{"data": "Hello world"}])
// });

app.get('/payment', (req, res) => {
  pool.connect();
  pool.query('SELECT * FROM payment', (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rows);
  });
});

app.use('/api/payment', require('./routes/payment'))



app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto http://localhost:3000');
});