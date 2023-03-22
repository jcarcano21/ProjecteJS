const express = require('express');
const app = express();

app.get('/', Express.static('public'))
app.use('/', Express.static(path.join(_dirname, 'public')))
app.get('/', (req, res) => {
  res.send('Hola, mundo!');
  res.json([{"data": "Hello world"}])
});

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto http://localhost:3000');
});