import React from 'react'
import { Link } from 'react-router-dom'
import { ContainerItemProfile, IconProfile, ItemProfile } from './styles'
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';

export const CardPersonalData = (props) => {
  return (
      <ContainerItemProfile>
        <ItemProfile>
          <p>{props.name}</p>
          <p>{props.email}</p>
          <p>{props.cpf}</p>
        </ItemProfile>
        <Link to="/Profile/edit">
          <IconProfile style={{ color: 'black'}}>
            <CreateOutlinedIcon />
          </IconProfile>
        </Link>
      </ContainerItemProfile>

  )
}