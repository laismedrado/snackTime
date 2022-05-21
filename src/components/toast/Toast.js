import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import styled from 'styled-components';
import { primaryColor } from '../../constants/colors';
import 'react-toastify/dist/ReactToastify.css';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

const TextContainer = styled.div`
background-color: ${primaryColor};
height: 90px;
padding: 10px;
display: flex;
align-items: center;
`
const TitleToast = styled.p` 
color: white;
font-size: 16px;
letter-spacing: -0.4px; `

const DivIcon = styled.div`
width: 20%;
color: white;
display: flex;
justify-content: center;
align-items: center;
`
const DivText = styled.div` 
width: 80%;
`
const InfoToast = styled.div`
p{
  color: black
}
`
const Msg = (props) => (
  <TextContainer>
    <DivIcon>
      <AccessTimeIcon />
    </DivIcon>

    <DivText>
      <TitleToast>Pedido em andamento</TitleToast>
      <InfoToast>
      <p>{props.restaurantName}</p>
      <p>SUBTOTAL R${props.totalPrice}</p>
      </InfoToast>
    </DivText>
  </TextContainer>
)
export const Toast = (props) => {
  const notify = () => {
    toast(<Msg restaurantName={props.restaurantName} total={props.totalPrice} />, {
      position: "bottom-center",
      autoClose: 5000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }

  return (
    <div>
      <button onClick={notify}>Fazer pedido !</button>
      <ToastContainer theme='colored' />
    </div>
  );
}