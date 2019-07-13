import React from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
import { formatPrice } from '../../utils/format'
import { addToCart } from '../../store/reducers/cart/actions'
import {
  Container,
  Image,
  Name,
  Price,
  ButtonWrapper,
  Button,
  ButtonIcon,
  ButtonIconText,
  ButtonText,
} from './styles'

function Product({ item }) {
  const quantity = useSelector(state =>
    state.cart.reduce((qtd, product) => {
      qtd[product.id] = product.quantity
      return qtd
    }, 0)
  )
  const dispatch = useDispatch()

  return (
    <Container>
      <Image source={{ uri: item.image }} />
      <Name>{item.title}</Name>
      <Price>{formatPrice(item.price)}</Price>
      <ButtonWrapper>
        <ButtonIcon>
          <Icon name="cart-plus" size={18} color="#fff" />
          <ButtonIconText>{quantity[item.id] || 0}</ButtonIconText>
        </ButtonIcon>
        <Button onPress={() => dispatch(addToCart(item.id))}>
          <ButtonText>Add to Cart</ButtonText>
        </Button>
      </ButtonWrapper>
    </Container>
  )
}

Product.propTypes = {
  item: PropTypes.shape().isRequired,
}

export default Product
