const mongoose = require("mongoose")

module.exports = mongoose.model("Tracking", {
  externalTracking: String,
  internalTracking: String,
  status: String,
  updates: Array
})
