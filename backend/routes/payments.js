const router = require("express").Router()
const paynow = require("../services/paynow")
const Order = require("../models/Order")

router.post("/pay", async (req, res) => {
  const { email, amount, orderId } = req.body

  const payment = paynow.createPayment("Order", email)
  payment.add("Items", amount)

  const response = await paynow.send(payment)

  if (response.success) {
    await Order.findByIdAndUpdate(orderId, {
      status: "pending_payment"
    })

    res.json({ url: response.redirectUrl })
  } else {
    res.status(400).json({ error: "Payment failed" })
  }
})

router.post("/result", async (req, res) => {
  const { reference } = req.body

  await Order.findByIdAndUpdate(reference, {
    status: "paid"
  })

  res.sendStatus(200)
})

module.exports = router
