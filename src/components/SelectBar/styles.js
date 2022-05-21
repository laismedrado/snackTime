import styled from "styled-components";

export const TabsContainer = styled.div ` 
width: 100%;
padding: 5px;
display:flex;
flex-direction:row; 
overflow: hidden;
overflow-x: scroll;
height: 50px;


`
export const TabItem = styled.div`
${props => props.selected  && 'color: green;' } 
margin: 5px;
display: flex;
margin-right: 40px;

width: 60px;
display: inline;

`