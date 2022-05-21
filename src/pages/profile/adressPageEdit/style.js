import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;

    p{
        font-weight: bold;
    }
`
export const ContainerForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    height: 80vh;
    margin-top: 11vh;

    button {
        width: 90vw;
        height: 3rem;
        border: none;
        border-radius: 5px;
        background-color: #5CB646;
        font-weight: bold;
    }
`

export const ContainerBtn = styled.div`
    margin: 8px 0 0 0;
`