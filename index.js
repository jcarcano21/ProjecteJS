
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
