import { useState } from 'react'
import './ShoppingApp.css'
import Header from './components/Header.jsx'
import ProductCard from './components/ProductCard.jsx'

function ShoppingApp() {
  
  return (
    <>
    <Header />
    <ProductCard 
    product={{
      image: "https://bjs.scene7.com/is/image/bjs/981833?$bjs-400$",
      price: "$26.99",
      name: "Chicken Breasts",
      description: "Fresh, boneless, skinless chicken breasts. Perfect for grilling, baking, or sautéing."
    }}
    />
    <ProductCard 
    product={{
      image: "https://bjs.scene7.com/is/image/bjs/26759?$bjs-400$",
      price: "$3.99",
      name: "White Bread",
      description: "Fresh, soft, and fluffy white bread. Baked in earnest as well as in house."
    }}
    />
    <ProductCard 
    product={{
      image: "https://bjs.scene7.com/is/image/bjs/222297__alt19?$bjs-400$",
      price: "$16.99",
      name: "Fudge Stripes",
      description: "Delicious fudge stripes. A sweet treat that's perfect for any festive occasion."
    }}
    />
    <ProductCard 
    product={{
      image: "https://bjs.scene7.com/is/image/bjs/91980?$bjs-400$",
      price: "$12.99",
      name: "Butter | Marble, Pound Cake",
      description: "Rich and moist pound cake with a swirl of butter and marble."
    }}
    />
    </>

  )
}

export default ShoppingApp