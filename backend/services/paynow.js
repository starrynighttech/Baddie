const Paynow = require("paynow")

const paynow = new Paynow(
  "YOUR_INTEGRATION_ID",
  "YOUR_INTEGRATION_KEY"
)

paynow.resultUrl = "https://your-backend-url/api/payments/result"
paynow.returnUrl = "https://your-website-url/success"

module.exports = paynow
