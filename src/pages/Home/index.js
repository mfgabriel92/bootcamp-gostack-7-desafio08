import React, { useState, useEffect } from 'react'
import Container from '../../components/Container'
import Product from '../../components/Product'
import { ProductsList } from './styles'
import Api from '../../services/Api'

function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function loadProducts() {
      const { data } = await Api.get('/products')
      setProducts(data)
    }

    loadProducts()
  }, [])

  return (
    <Container>
      <ProductsList
        data={products}
        extraData={products}
        keyExtractor={item => String(item.id)}
        numColumns={2}
        renderItem={({ item }) => <Product item={item} />}
      />
    </Container>
  )
}

export default Home
