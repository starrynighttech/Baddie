import { useEffect, useState } from "react"

const API = "https://YOUR-5000-URL.app.github.dev/api"

export default function Shop() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch(`${API}/products`)
      .then(res => res.json())
      .then(setProducts)
  }, [])

  return (
    <div>
      {products.map(p => (
        <div key={p._id}>
          <img src={p.image} width="200" />
          <h2>{p.name}</h2>
          <p>${p.price}</p>
        </div>
      ))}
    </div>
  )
}
