import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`

export const SubTotal = styled.span`
  font-size: 20px;
`

export const TotalPrice = styled.span`
  display: inline;
  margin-left: 60%;
  font-size: 20px;
  color: #5CB646;
`

export const BtnCart = styled.button`
  width: 350px;
  height: 3rem;
  border: none;
  border-radius: 5px;
  background-color: #5CB646;
  font-weight: bold;
  margin-top: 50px;
  position: absolute;
  margin-left: -340px;
`

export const ContainerProfile = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Profile = styled.div`
  width: 100%;
  height: 100px;
  display:flex ;
  justify-content: space-around;
  flex-direction: column;
  padding: 5px;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.1);
`
export const Label = styled.label`
  font-family: Roboto;
  font-size: 16px;
  margin-left: 10px;
`