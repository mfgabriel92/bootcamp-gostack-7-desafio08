import React from 'react'
import { useSelector } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
import Container from '../../components/Container'
import EmptyCart from '../../components/EmptyCart'
import CartItem from '../../components/CartItem'
import { formatPrice } from '../../utils/format'
import {
  CartList,
  ButtonWrapper,
  Button,
  ButtonIcon,
  ButtonText,
  ButtonTextPrice,
} from './styles'

function Cart() {
  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.quantity),
    }))
  )
  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((sum, product) => {
        return sum + product.price * product.quantity
      }, 0)
    )
  )

  if (cart.length === 0) {
    return (
      <Container>
        <EmptyCart />
      </Container>
    )
  }

  return (
    <Container>
      <CartList
        data={cart}
        extraData={cart}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <CartItem item={item} />}
      />
      <ButtonWrapper>
        <ButtonIcon>
          <Icon name="check" size={18} color="#fff" />
        </ButtonIcon>
        <Button>
          <ButtonText>Pay</ButtonText>
          <ButtonTextPrice>{total}</ButtonTextPrice>
        </Button>
      </ButtonWrapper>
    </Container>
  )
}

export default Cart
