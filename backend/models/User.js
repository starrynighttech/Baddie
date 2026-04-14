const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
  email: String,
  password: String
})

module.exports = mongoose.model("User", UserSchema)
referralCode: String,
referredBy: String
if (newUser.referredBy) {
  await addMoney(referrerId, 1)
}
