import { useEffect, useState } from "react"
import { View, Text, Image } from "react-native"
import { API } from "../services/api"

export default function ShopScreen() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch(`${API}/products`)
      .then(res => res.json())
      .then(setProducts)
  }, [])

  return (
    <View>
      {products.map(p => (
        <View key={p._id}>
          <Image source={{ uri: p.image }} style={{ width: 200, height: 200 }} />
          <Text>{p.name}</Text>
          <Text>${p.price}</Text>
        </View>
      ))}
    </View>
  )
}
