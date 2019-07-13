import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Container, Message } from './styles'

function EmptyCart() {
  return (
    <Container>
      <Icon name="cart-off" size={77} color="#ccc" />
      <Message>Your cart is empty</Message>
    </Container>
  )
}

export default EmptyCart
