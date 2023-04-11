// const express = require('express');
// const app = express();
// const fs= require('fs')
// const { Pool } = require('pg');
// const path = require('path');
// // const db = require('db');
// const pool = new Pool(JSON.parse(fs.readFileSync(__dirname + '/db_credentials.json')))

// app.use('/', express.static('public'))
// // app.use('/', Express.static(path.join(_dirname, 'public')))
// // app.get('/', (req, res) => {
// //   res.send('Hola, mundo!');
// //   res.json([{"data": "Hello world"}])
// // });

// app.get('/payment', (req, res) => {
//   pool.connect();
//   pool.query('SELECT * FROM payment', (error, result) => {
//     if (error) {
//       throw error;
//     }
//     res.status(200).json(result.rows);
//   });
// });

// app.use('/api/payment', require('./routes/payment'))



// app.listen(3000, () => {
//   console.log('Servidor iniciado en el puerto http://localhost:3000');
// });

const express = require('express')
const path = require('path')

const app = express()
const { Pool } = require('pg');

app.use('/', express.static(__dirname + '/public'))

app.use('/api/customers', require('./routes/customers'))
app.use('/api/film', require('./routes/film'))
app.use('/api/payment', require('./routes/payment'))


app.listen(3000, () => {
    console.log('Servidor en execució a http://localhost:3000')
})
