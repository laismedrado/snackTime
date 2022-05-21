import styled from "styled-components";
import { primaryColor } from '../../constants/colors';

export const ItemProfile = styled.div ` 
width: 70%;
height: 100px;
display:flex ;
justify-content: space-around;
flex-direction: column;
padding: 5px;

`


export const ItemHistoryOrders = styled(ItemProfile)` 
width: 100%;
margin-left: 5px;


`
export const ContainerItemProfile = styled.div`
width: 100%;
height: 100px;
display: flex;
justify-content: space-around;
&:hover {
    background-color: rgba(0,0,0,25%);
  }
`

export const IconProfile = styled.div`
/* width: 30%; */
display: flex;
justify-content: center;
align-items: start;
height: 100px ;
padding-top: 10px;
`
export const ContainerOrderHistory = styled(ContainerItemProfile)` 
border: 2px solid rgba(0,0,0,25%);
width: 90% ;
border-radius: 10px;
margin: 10px;
`

export const TitleRestaurant = styled.p  ` 
color: ${primaryColor};
font-weight: bold;
`

export const Message = styled.div ` 
font-size: 17px;
margin: auto;
width: 90%;
text-align: center;
`

export const AddresLabel = styled.p` 
color: rgba(0,0,0,25%)
`