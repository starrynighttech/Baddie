const router = require("express").Router()
const Cart = require("../models/Cart")

router.post("/", async (req, res) => {
  const cart = await Cart.create(req.body)
  res.json(cart)
})

router.get("/:userId", async (req, res) => {
  const cart = await Cart.findOne({ userId: req.params.userId })
  res.json(cart)
})

module.exports = router
