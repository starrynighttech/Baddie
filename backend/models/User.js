referralCode: String,
referredBy: String
if (newUser.referredBy) {
  await addMoney(referrerId, 1)
}
