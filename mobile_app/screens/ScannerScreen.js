import { BarCodeScanner } from "expo-barcode-scanner"

export default function ScannerScreen() {
  return (
    <BarCodeScanner
      onBarCodeScanned={({ data }) => {
        console.log("Scanned:", data)
      }}
      style={{ flex: 1 }}
    />
  )
}
