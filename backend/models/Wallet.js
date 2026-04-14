const mongoose = require("mongoose")

module.exports = mongoose.model("Wallet", {
  userId: String,
  balance: { type: Number, default: 0 }
})
