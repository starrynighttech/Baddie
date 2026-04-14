const router = require("express").Router()
const Tracking = require("../models/Tracking")

router.post("/create", async (req, res) => {
  const { externalTracking } = req.body

  const internalTracking = "SN-" + Date.now()

  const tracking = await Tracking.create({
    externalTracking,
    internalTracking,
    status: "processing",
    updates: []
  })

  res.json(tracking)
})

router.get("/:code", async (req, res) => {
  const tracking = await Tracking.findOne({
    internalTracking: req.params.code
  })

  res.json(tracking)
})

module.exports = router
