const router = require("express").Router()
const { addMoney } = require("../services/walletService")

let activeUsers = []

router.post("/", async (req, res) => {
  const { userId, lat, lng } = req.body

  activeUsers.push({ userId, lat, lng, time: Date.now() })

  const nearby = activeUsers.filter(u =>
    Math.abs(u.lat - lat) < 0.01 &&
    Math.abs(u.lng - lng) < 0.01 &&
    u.userId !== userId
  )

  if (nearby.length > 0) {
    await addMoney(userId, 0.10)
    await addMoney(nearby[0].userId, 0.10)

    return res.json({ success: true, earned: 0.10 })
  }

  res.json({ success: false })
})

module.exports = router
