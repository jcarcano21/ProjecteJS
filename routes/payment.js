const express = require('express')
const router = express.Router()
const db = require('../db')

router.get('/', async (req, res) => {
  let result = await db.query('SELECT payment.payment_id, payment.customer_id, staff.first_name AS staff_name, payment.rental_id, payment.amount, payment.payment_date FROM payment JOIN staff ON payment.staff_id = staff.staff_id')
  res.json(result.rows)
})

router.delete('/:payment_id', async (req, res) => {
  try {
    await db.query('DELETE FROM payment WHERE payment_id = ' + req.params.payment_id)
    res.sendStatus(200)
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
})

module.exports = router
