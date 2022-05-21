import React from 'react'
import logo from '../../assets/snack_logo_black.png'
import { LogoHeader } from './styles'


export default function HeaderLogo()  {
    return (
        <>
          <LogoHeader>
                <img alt={"Logo Snack Time"} src={logo}/>
          </LogoHeader>
        </>
    )
}