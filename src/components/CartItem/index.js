import React from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useDispatch } from 'react-redux'
import { TouchableOpacity } from 'react-native'
import { updateQuantity, removeItem } from '../../store/reducers/cart/actions'
import {
  Container,
  Image,
  Info,
  Name,
  Price,
  Actions,
  ItemCount,
  Count,
  Button,
} from './styles'

function CartItem({ item }) {
  const dispatch = useDispatch()

  function decrement({ id, quantity }) {
    dispatch(updateQuantity(id, quantity - 1))
  }

  function increment({ id, quantity }) {
    dispatch(updateQuantity(id, quantity + 1))
  }

  function remove({ id }) {
    dispatch(removeItem(id))
  }

  return (
    <Container>
      <Image source={{ uri: item.image }} />
      <Info>
        <Name>{item.title}</Name>
        <Price>{item.subtotal}</Price>
        <Actions>
          <ItemCount>
            <Button onPress={() => decrement(item)}>
              <Icon name="minus-circle-outline" size={22} color="#7159c1" />
            </Button>
            <Count>{item.quantity}</Count>
            <Button onPress={() => increment(item)}>
              <Icon name="plus-circle-outline" size={22} color="#7159c1" />
            </Button>
          </ItemCount>
          <TouchableOpacity onPress={() => remove(item)}>
            <Icon name="delete" size={22} color="#7159c1" />
          </TouchableOpacity>
        </Actions>
      </Info>
    </Container>
  )
}

CartItem.propTypes = {
  item: PropTypes.shape().isRequired,
}

export default CartItem
