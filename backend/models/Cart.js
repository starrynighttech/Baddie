const mongoose = require("mongoose")

module.exports = mongoose.model("Cart", {
  userId: String,
  items: Array
})
