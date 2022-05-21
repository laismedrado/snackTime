import React from 'react'
import { ContainerFooter, ItemMenu } from './styles'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <ContainerFooter>
        <ItemMenu>
          <Link to="/HomePage" style={{ color: 'inherit'}}>
            <HomeOutlinedIcon fontSize='large' />
          </Link>
        </ItemMenu>
        <ItemMenu>
          <Link to="/ShoppingCart" style={{ color: 'inherit'}}>
            <ShoppingCartOutlinedIcon fontSize='large' />
          </Link>
        </ItemMenu>
        <ItemMenu>
          <Link to="/ProfilePage" style={{ color: 'inherit'}}>
            <PersonOutlineOutlinedIcon fontSize='large' />
          </Link>
        </ItemMenu>
    </ContainerFooter>
  )
}