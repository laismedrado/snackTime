import React from 'react'
import {HeaderContainer} from './styles'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useNavigate } from 'react-router-dom';


export default function Header({pageName})  {
    const navigate = useNavigate()
    return (
        <>
        <HeaderContainer>
            <figure onClick={() => navigate(-1)}>
                <ArrowBackIosIcon fontSize='small'/>
            </figure>
            <p>{pageName}</p>
        </HeaderContainer>
        </>
    )
}