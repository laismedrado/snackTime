import React from 'react'
import { Link } from 'react-router-dom'
import { AddresLabel, ContainerItemProfile, IconProfile, ItemProfile } from './styles'
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';

export const CardAddressData= (props) => {
  return (
    <ContainerItemProfile>
      <ItemProfile>
        <AddresLabel>Endereço cadastrado</AddresLabel>
        <p>{props.address}</p>
      </ItemProfile>
      <Link to="/AdressPageEdit">
        <IconProfile>
          <CreateOutlinedIcon style={{ color: 'black'}} />
        </IconProfile>
      </Link>
    </ContainerItemProfile>

  )
}