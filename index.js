const express = require('express');
const app = express();

const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'ProyectJS',
  password: 'Josep123-',
  port: 5432,
});

app.get('/', express.static('public'))
// app.use('/', Express.static(path.join(_dirname, 'public')))
// app.get('/', (req, res) => {
//   res.send('Hola, mundo!');
//   res.json([{"data": "Hello world"}])
// });

app.get('/actor', (req, res) => {
  pool.connect();
  pool.query('SELECT * FROM actor', (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
});

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto http://localhost:3000');
});