import { Accelerometer } from "expo-sensors"
import { useEffect } from "react"
import { API } from "../services/api"

export default function ShakeScreen() {
  useEffect(() => {
    Accelerometer.addListener(data => {
      const total = Math.abs(data.x + data.y + data.z)

      if (total > 2.5) {
        fetch(`${API}/shake`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId: "USER_ID",
            lat: 0,
            lng: 0
          })
        })
      }
    })
  }, [])

  return null
}
