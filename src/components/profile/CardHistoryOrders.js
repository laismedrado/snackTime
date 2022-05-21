import React from 'react'
import { ContainerOrderHistory, ItemHistoryOrders, TitleRestaurant } from './styles'

export const CardHistoryOrders = (props) => {

  let dateCreate = new Date(props.createdAt)
  dateCreate = new Intl.DateTimeFormat('pt-BR', { timeZone: 'UTC' }).format(dateCreate)
  return (
    <ContainerOrderHistory>
      <ItemHistoryOrders>
        <TitleRestaurant>{props.restaurantName}</TitleRestaurant>
        <p> {dateCreate}</p>
        <p style={{ fontWeight: 'bold' }} >SUBTOAL R$ {props.totalPrice},00</p>
      </ItemHistoryOrders>

    </ContainerOrderHistory>

  )
}
