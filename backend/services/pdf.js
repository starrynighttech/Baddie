const PDFDocument = require("pdfkit")
const fs = require("fs")

exports.generateInvoice = (order) => {
  const doc = new PDFDocument()
  const path = `./invoices/${order._id}.pdf`

  doc.pipe(fs.createWriteStream(path))

  doc.text("Starry Nights")
  doc.text("Tracking: " + order.trackingCode)

  doc.end()

  return path
}
